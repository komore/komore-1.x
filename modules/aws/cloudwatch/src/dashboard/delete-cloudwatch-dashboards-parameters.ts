import { type CloudWatchDashboardName } from './name/cloudwatch-dashboard-name';

/**
 * Delete CloudWatch dashboards parameters
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteDashboards.html#API_DeleteDashboards_RequestParameters DeleteDashboards Request Parameters}
 */
export interface DeleteCloudWatchDashboardsParameters {
  /**
   * Dashboard names
   */
  readonly DashboardNames: ReadonlyArray<CloudWatchDashboardName>;
}
