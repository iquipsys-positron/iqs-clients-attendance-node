"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class AttendanceDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-attendance", "controller", "*", "*", "*"));
    }
    getAttendances(correlationId, orgId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'attendance.get_attendances');
        this._controller.getAttendances(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getAttendancesWithinTime(correlationId, orgId, fromTime, toTime, callback) {
        let timing = this.instrument(correlationId, 'attendance.get_attendances_within_time');
        this._controller.getAttendancesWithinTime(correlationId, orgId, fromTime, toTime, (err, attendances) => {
            timing.endTiming();
            callback(err, attendances);
        });
    }
    addAttendance(correlationId, orgId, attendance, callback) {
        let timing = this.instrument(correlationId, 'attendance.add_attendance');
        this._controller.addAttendance(correlationId, attendance, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    addAttendances(correlationId, orgId, attendances, callback) {
        let timing = this.instrument(correlationId, 'attendance.add_attendances');
        this._controller.addAttendances(correlationId, attendances, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    deleteAttendances(correlationId, orgId, filter, callback) {
        let timing = this.instrument(correlationId, 'attendance.delete_attendances');
        this._controller.deleteAttendances(correlationId, filter, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
}
exports.AttendanceDirectClientV1 = AttendanceDirectClientV1;
//# sourceMappingURL=AttendanceDirectClientV1.js.map