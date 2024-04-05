import { type JsonString } from '@komore/json';

import { type CloudWatchDashboardArn } from './arn/cloudwatch-dashboard-arn';
import { type CloudWatchDashboardName } from './name/cloudwatch-dashboard-name';

/**
 * Get CloudWatch dashboard result
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetDashboard.html#API_GetDashboard_ResponseElements GetDashboard Response Elements}
 */
export interface GetCloudWatchDashboardResult {
  /**
   * Dashboard ARN
   */
  readonly DashboardArn: CloudWatchDashboardArn;
  /**
   * Dashboard body
   *
   * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html CloudWatch Dashboard Body Structure}
   */
  readonly DashboardBody: JsonString;
  /**
   * Dashboard name
   */
  readonly DashboardName: CloudWatchDashboardName;
}
