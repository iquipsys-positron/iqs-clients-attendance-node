"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class AttendanceNullClientV1 {
    getAttendances(correlationId, orgId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getAttendancesWithinTime(correlationId, orgId, fromTime, toTime, callback) {
        callback(null, {
            org_id: orgId,
            start_time: fromTime,
            end_time: toTime,
            objects: []
        });
    }
    addAttendance(correlationId, orgId, attendance, callback) {
        if (callback)
            callback(null);
    }
    addAttendances(correlationId, orgId, attendances, callback) {
        if (callback)
            callback(null);
    }
    deleteAttendances(correlationId, orgId, filter, callback) {
        if (callback)
            callback(null);
    }
}
exports.AttendanceNullClientV1 = AttendanceNullClientV1;
//# sourceMappingURL=AttendanceNullClientV1.js.map