import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { AttendancesV1 } from './AttendancesV1';
import { AttendanceV1 } from './AttendanceV1';
import { IAttendanceClientV1 } from './IAttendanceClientV1';
export declare class AttendanceHttpClientV1 extends CommandableHttpClient implements IAttendanceClientV1 {
    constructor(config?: any);
    getAttendances(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<AttendancesV1>) => void): void;
    getAttendancesWithinTime(correlationId: string, orgId: string, fromTime: Date, toTime: Date, callback: (err: any, attendances: AttendancesV1) => void): void;
    addAttendance(correlationId: string, orgId: string, attendance: AttendanceV1, callback: (err: any) => void): void;
    addAttendances(correlationId: string, orgId: string, attendances: AttendanceV1[], callback: (err: any) => void): void;
    deleteAttendances(correlationId: string, orgId: string, filter: FilterParams, callback: (err: any) => void): void;
}
