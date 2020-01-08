let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ClusterV1 } from 'pip-clients-clusters-node';
import { ClustersMemoryClientV1 } from 'pip-clients-clusters-node';

import { AttendanceMemoryPersistence } from 'iqs-services-attendance-node';
import { AttendanceController } from 'iqs-services-attendance-node';
import { AttendanceHttpServiceV1 } from 'iqs-services-attendance-node';
import { IAttendanceClientV1 } from '../../src/version1/IAttendanceClientV1';
import { AttendanceHttpProxyClientV1 } from '../../src/version1/AttendanceHttpProxyClientV1';
import { AttendanceClientFixtureV1 } from './AttendanceClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);
var CLUSTER: ClusterV1 = {
    id: '1',
    name: 'test',
    type: 'organizations',
    active: true,
    api_host: 'localhost',
    service_ports: { 
        'iqs-services-attendance': 3000 
    },
    active_tenants: ['1']
}

suite('AttendanceHttpProxyClientV1', ()=> {
    let service: AttendanceHttpServiceV1;
    let client: AttendanceHttpProxyClientV1;
    let fixture: AttendanceClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new AttendanceMemoryPersistence();
        let controller = new AttendanceController();

        let clustersClient = new ClustersMemoryClientV1();
        clustersClient.createCluster(null, CLUSTER, (err, cluster) => {});        

        service = new AttendanceHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-clusters', 'client', 'memory', 'default', '1.0'), clustersClient,
            new Descriptor('iqs-services-attendance', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-attendance', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-attendance', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new AttendanceHttpProxyClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new AttendanceClientFixtureV1(client);

        service.open(null, (err) => {
            done(err);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
