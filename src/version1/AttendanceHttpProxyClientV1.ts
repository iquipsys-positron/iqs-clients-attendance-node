import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';

import { AttendancesV1 } from './AttendancesV1';
import { AttendanceV1 } from './AttendanceV1';
import { IAttendanceClientV1 } from './IAttendanceClientV1';
import { AttendanceHttpClientV1 } from './AttendanceHttpClientV1';

export class AttendanceHttpProxyClientV1 extends ClustersProxyHttpClientV1<IAttendanceClientV1>
    implements IAttendanceClientV1 {
    
    constructor(config?: any) {
        super(AttendanceHttpClientV1, 'iqs-services-attendance', 30022);

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getAttendances(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<AttendancesV1>) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getAttendances(correlationId, orgId, filter, paging, callback);
        });
    }

    public getAttendancesWithinTime(correlationId: string, orgId: string, fromTime: Date, toTime: Date, 
        callback: (err: any, attendances: AttendancesV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getAttendancesWithinTime(correlationId, orgId, fromTime, toTime, callback);
        });
    }
            
    public addAttendance(correlationId: string, orgId: string, attendance: AttendanceV1, 
        callback: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.addAttendance(correlationId, orgId, attendance, callback);
        });
    }
    
    public addAttendances(correlationId: string, orgId: string, attendances: AttendanceV1[], 
        callback: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.addAttendances(correlationId, orgId, attendances, callback);
        });
    }
                
    public deleteAttendances(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.deleteAttendances(correlationId, orgId, filter, callback);
        });
    }
    
}
