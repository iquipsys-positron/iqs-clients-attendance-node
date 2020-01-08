import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { AttendanceNullClientV1 } from '../version1/AttendanceNullClientV1';
import { AttendanceDirectClientV1 } from '../version1/AttendanceDirectClientV1';
import { AttendanceHttpClientV1 } from '../version1/AttendanceHttpClientV1';
import { AttendanceLambdaClientV1 } from '../version1/AttendanceLambdaClientV1';
import { AttendanceHttpProxyClientV1 } from '../version1/AttendanceHttpProxyClientV1';

export class AttendanceClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-attendance', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-attendance', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-attendance', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-attendance', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-attendance', 'client', 'lambda', 'default', '1.0');
	public static HttpProxyClientV1Descriptor = new Descriptor('iqs-services-attendance', 'client', 'http-proxy', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(AttendanceClientFactory.NullClientV1Descriptor, AttendanceNullClientV1);
		this.registerAsType(AttendanceClientFactory.DirectClientV1Descriptor, AttendanceDirectClientV1);
		this.registerAsType(AttendanceClientFactory.HttpClientV1Descriptor, AttendanceHttpClientV1);
		this.registerAsType(AttendanceClientFactory.LambdaClientV1Descriptor, AttendanceLambdaClientV1);
		this.registerAsType(AttendanceClientFactory.HttpProxyClientV1Descriptor, AttendanceHttpProxyClientV1);
	}
	
}
