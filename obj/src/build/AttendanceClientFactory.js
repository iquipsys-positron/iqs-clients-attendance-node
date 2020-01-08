"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const AttendanceNullClientV1_1 = require("../version1/AttendanceNullClientV1");
const AttendanceDirectClientV1_1 = require("../version1/AttendanceDirectClientV1");
const AttendanceHttpClientV1_1 = require("../version1/AttendanceHttpClientV1");
const AttendanceLambdaClientV1_1 = require("../version1/AttendanceLambdaClientV1");
const AttendanceHttpProxyClientV1_1 = require("../version1/AttendanceHttpProxyClientV1");
class AttendanceClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(AttendanceClientFactory.NullClientV1Descriptor, AttendanceNullClientV1_1.AttendanceNullClientV1);
        this.registerAsType(AttendanceClientFactory.DirectClientV1Descriptor, AttendanceDirectClientV1_1.AttendanceDirectClientV1);
        this.registerAsType(AttendanceClientFactory.HttpClientV1Descriptor, AttendanceHttpClientV1_1.AttendanceHttpClientV1);
        this.registerAsType(AttendanceClientFactory.LambdaClientV1Descriptor, AttendanceLambdaClientV1_1.AttendanceLambdaClientV1);
        this.registerAsType(AttendanceClientFactory.HttpProxyClientV1Descriptor, AttendanceHttpProxyClientV1_1.AttendanceHttpProxyClientV1);
    }
}
exports.AttendanceClientFactory = AttendanceClientFactory;
AttendanceClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-attendance', 'factory', 'default', 'default', '1.0');
AttendanceClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-attendance', 'client', 'null', 'default', '1.0');
AttendanceClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-attendance', 'client', 'direct', 'default', '1.0');
AttendanceClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-attendance', 'client', 'http', 'default', '1.0');
AttendanceClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-attendance', 'client', 'lambda', 'default', '1.0');
AttendanceClientFactory.HttpProxyClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-attendance', 'client', 'http-proxy', 'default', '1.0');
//# sourceMappingURL=AttendanceClientFactory.js.map