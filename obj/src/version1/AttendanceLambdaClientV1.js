"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class AttendanceLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('attendance');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getAttendances(correlationId, orgId, filter, paging, callback) {
        this.callCommand('get_attendances', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getAttendancesWithinTime(correlationId, orgId, fromTime, toTime, callback) {
        this.callCommand('get_attendances_within_time', correlationId, {
            org_id: orgId,
            from_time: fromTime,
            to_time: toTime
        }, callback);
    }
    addAttendance(correlationId, orgId, attendance, callback) {
        this.callCommand('add_attendance', correlationId, {
            attendance: attendance
        }, callback);
    }
    addAttendances(correlationId, orgId, attendances, callback) {
        this.callCommand('add_attendances', correlationId, {
            attendances: attendances
        }, callback);
    }
    deleteAttendances(correlationId, orgId, filter, callback) {
        this.callCommand('delete_attendances', correlationId, {
            filter: filter
        }, callback);
    }
}
exports.AttendanceLambdaClientV1 = AttendanceLambdaClientV1;
//# sourceMappingURL=AttendanceLambdaClientV1.js.map