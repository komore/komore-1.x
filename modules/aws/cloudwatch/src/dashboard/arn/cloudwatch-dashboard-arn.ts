import { type RegionalArn } from '@komore/aws';

import { type CloudWatchDashboardName } from '../name/cloudwatch-dashboard-name';

/**
 * CloudWatch dashboard ARN
 */
export type CloudWatchDashboardArn = RegionalArn<`cloudwatch', 'dashboard/${CloudWatchDashboardName}`>;
