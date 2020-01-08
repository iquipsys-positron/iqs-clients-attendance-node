let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { AttendancesV1 } from '../../src/version1/AttendancesV1';
import { AttendanceV1 } from '../../src/version1/AttendanceV1';
import { ObjectAttendanceV1 } from '../../src/version1/ObjectAttendanceV1';
import { IAttendanceClientV1 } from '../../src/version1/IAttendanceClientV1';

let UPDATE1: AttendanceV1 = {
    org_id: '1',
    object_id: '1',
    start_time: new Date(2017,10,18,9,0,0),
    end_time: new Date(2017,10,18,17,0,0)
};
let UPDATE2: AttendanceV1 = {
    org_id: '1',
    object_id: '2',
    start_time: new Date(2017,10,18,10,30,0),
    end_time: new Date(2017,10,18,16,45,0)
};
let UPDATE3: AttendanceV1 = {
    org_id: '1',
    object_id: '1',
    start_time: new Date(2017,10,20,9,0,0),
    end_time: new Date(2017,10,20,17,0,0)
};

export class AttendanceClientFixtureV1 {
    private _client: IAttendanceClientV1;
    
    constructor(client: IAttendanceClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        async.series([
        // Create one attendance
            (callback) => {
                this._client.addAttendance(
                    null,
                    '1',
                    UPDATE1,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Create other attendances
            (callback) => {
                this._client.addAttendances(
                    null,
                    '1',
                    [ UPDATE2, UPDATE3 ],
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Get all attendance
            (callback) => {
                this._client.getAttendances(
                    null,
                    '1',
                    null,
                    new PagingParams(0,5,false),
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.isTrue(page.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the attendance
            (callback) => {
                this._client.getAttendancesWithinTime(
                    null, '1', new Date(2017,10,17,0,0,0), new Date(2017,10,21,0,0,0),
                    (err, attendances) => {
                        assert.isNull(err);

                        assert.isObject(attendances);
                        assert.equal(attendances.org_id, '1');
                        assert.lengthOf(attendances.objects, 2);
                        
                        callback();
                    }
                );
            },
        // Delete attendances
            (callback) => {
                this._client.deleteAttendances(
                    null,
                    '1',
                    null,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get deleted attendance
            (callback) => {
                this._client.getAttendances(
                    null,
                    '1',
                    null,
                    null,
                    (err, page) => {
                        assert.isNull(err);
                        
                        assert.isObject(page);
                        assert.lengthOf(page.data, 0);

                        callback();
                    }
                );
            }
        ], done);
    }
}
