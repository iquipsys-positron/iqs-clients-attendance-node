import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IAttendanceClientV1 } from './IAttendanceClientV1';
//import { IAttendanceController } from 'iqs-services-attendance-node';
import { AttendancesV1 } from './AttendancesV1';
import { AttendanceV1 } from './AttendanceV1';

export class AttendanceDirectClientV1 extends DirectClient<any> implements IAttendanceClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-attendance", "controller", "*", "*", "*"))
    }

    public getAttendances(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<AttendancesV1>) => void): void {
        let timing = this.instrument(correlationId, 'attendance.get_attendances');
        this._controller.getAttendances(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getAttendancesWithinTime(correlationId: string, orgId: string, fromTime: Date, toTime: Date, 
        callback: (err: any, attendances: AttendancesV1) => void): void {
        let timing = this.instrument(correlationId, 'attendance.get_attendances_within_time');
        this._controller.getAttendancesWithinTime(correlationId, orgId, fromTime, toTime, (err, attendances) => {
            timing.endTiming();
            callback(err, attendances);
        });
    }
            
    public addAttendance(correlationId: string, orgId: string, attendance: AttendanceV1, 
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'attendance.add_attendance');
        this._controller.addAttendance(correlationId, attendance, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    
    public addAttendances(correlationId: string, orgId: string, attendances: AttendanceV1[], 
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'attendance.add_attendances');
        this._controller.addAttendances(correlationId, attendances, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
                
    public deleteAttendances(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'attendance.delete_attendances');
        this._controller.deleteAttendances(correlationId, filter, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    
}