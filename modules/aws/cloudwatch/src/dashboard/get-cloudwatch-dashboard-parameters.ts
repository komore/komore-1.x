import { type CloudWatchDashboardName } from './name/cloudwatch-dashboard-name';

/**
 * Get CloudWatch dashboard parameters
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetDashboard.html#API_GetDashboard_RequestParameters GetDashboard Request Parameters}
 */
export interface GetCloudWatchDashboardParameters {
  /**
   * Dashboard name
   */
  readonly DashboardName: CloudWatchDashboardName;
}
