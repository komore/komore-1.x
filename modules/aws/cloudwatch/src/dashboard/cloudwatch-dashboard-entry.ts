import { type MillisecondsSinceEpoch } from '@komore/temporal';

import { type CloudWatchDashboardArn } from './arn/cloudwatch-dashboard-arn';
import { type CloudWatchDashboardName } from './name/cloudwatch-dashboard-name';

/**
 * CloudWatch dashboard entry
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DashboardEntry.html DashboardEntry}
 */
export interface CloudWatchDashboardEntry {
  /**
   * Dashboard ARN
   */
  readonly DashboardArn: CloudWatchDashboardArn;
  /**
   * Dashboard name
   */
  readonly DashboardName: CloudWatchDashboardName;
  /**
   * Last modified date and time
   */
  readonly LastModified: MillisecondsSinceEpoch;
  /**
   * Size
   */
  readonly Size: number;
}
