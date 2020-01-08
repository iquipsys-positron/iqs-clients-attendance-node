"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
const AttendanceHttpClientV1_1 = require("./AttendanceHttpClientV1");
class AttendanceHttpProxyClientV1 extends pip_clients_clusters_node_1.ClustersProxyHttpClientV1 {
    constructor(config) {
        super(AttendanceHttpClientV1_1.AttendanceHttpClientV1, 'iqs-services-attendance', 30022);
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getAttendances(correlationId, orgId, filter, paging, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getAttendances(correlationId, orgId, filter, paging, callback);
        });
    }
    getAttendancesWithinTime(correlationId, orgId, fromTime, toTime, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getAttendancesWithinTime(correlationId, orgId, fromTime, toTime, callback);
        });
    }
    addAttendance(correlationId, orgId, attendance, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.addAttendance(correlationId, orgId, attendance, callback);
        });
    }
    addAttendances(correlationId, orgId, attendances, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.addAttendances(correlationId, orgId, attendances, callback);
        });
    }
    deleteAttendances(correlationId, orgId, filter, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.deleteAttendances(correlationId, orgId, filter, callback);
        });
    }
}
exports.AttendanceHttpProxyClientV1 = AttendanceHttpProxyClientV1;
//# sourceMappingURL=AttendanceHttpProxyClientV1.js.map