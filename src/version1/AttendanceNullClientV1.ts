import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IAttendanceClientV1 } from './IAttendanceClientV1';
import { AttendancesV1 } from './AttendancesV1';
import { AttendanceV1 } from './AttendanceV1';

export class AttendanceNullClientV1 implements IAttendanceClientV1 {
            
    public getAttendances(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<AttendancesV1>) => void): void {
        callback(null, new DataPage<AttendancesV1>([], 0));
    }

    public getAttendancesWithinTime(correlationId: string, orgId: string, fromTime: Date, toTime: Date, 
        callback: (err: any, attendances: AttendancesV1) => void): void {
        callback(null, <AttendancesV1>{
            org_id: orgId,
            start_time: fromTime,
            end_time: toTime,
            objects: []
        });
    }
            
    public addAttendance(correlationId: string, orgId: string, attendance: AttendanceV1, 
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }

    public addAttendances(correlationId: string, orgId: string, attendances: AttendanceV1[], 
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }
            
    public deleteAttendances(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }
    
}