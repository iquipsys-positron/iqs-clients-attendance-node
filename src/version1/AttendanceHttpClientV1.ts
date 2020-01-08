import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { AttendancesV1 } from './AttendancesV1';
import { AttendanceV1 } from './AttendanceV1';
import { IAttendanceClientV1 } from './IAttendanceClientV1';

export class AttendanceHttpClientV1 extends CommandableHttpClient implements IAttendanceClientV1 {
    
    constructor(config?: any) {
        super('v1/attendance');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getAttendances(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<AttendancesV1>) => void): void {
        this.callCommand( 
            'get_attendances', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getAttendancesWithinTime(correlationId: string, orgId: string, fromTime: Date, toTime: Date, 
        callback: (err: any, attendances: AttendancesV1) => void): void {
        this.callCommand( 
            'get_attendances_within_time', 
            correlationId,
            {
                org_id: orgId,
                from_time: fromTime,
                to_time: toTime
            }, 
            callback
        );
    }
            
    public addAttendance(correlationId: string, orgId: string, attendance: AttendanceV1, 
        callback: (err: any) => void): void {
        this.callCommand( 
            'add_attendance', 
            correlationId,
            {
                attendance: attendance
            }, 
            callback
        );
    }
    
    public addAttendances(correlationId: string, orgId: string, attendances: AttendanceV1[], 
        callback: (err: any) => void): void {
        this.callCommand( 
            'add_attendances', 
            correlationId,
            {
                attendances: attendances
            }, 
            callback
        );
    }
                
    public deleteAttendances(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any) => void): void {
        this.callCommand( 
            'delete_attendances', 
            correlationId,
            {
                filter: filter
            }, 
            callback
        );
    }
    
}
