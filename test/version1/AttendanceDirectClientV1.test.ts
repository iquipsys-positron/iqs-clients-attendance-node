let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { AttendanceMemoryPersistence } from 'iqs-services-attendance-node';
import { AttendanceController } from 'iqs-services-attendance-node';
import { IAttendanceClientV1 } from '../../src/version1/IAttendanceClientV1';
import { AttendanceDirectClientV1 } from '../../src/version1/AttendanceDirectClientV1';
import { AttendanceClientFixtureV1 } from './AttendanceClientFixtureV1';

suite('AttendanceDirectClientV1', ()=> {
    let client: AttendanceDirectClientV1;
    let fixture: AttendanceClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new AttendanceMemoryPersistence();
        let controller = new AttendanceController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-attendance', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-attendance', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new AttendanceDirectClientV1();
        client.setReferences(references);

        fixture = new AttendanceClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
