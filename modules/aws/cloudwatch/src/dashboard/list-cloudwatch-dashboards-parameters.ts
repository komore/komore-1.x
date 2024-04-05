import { type ListCloudWatchDashboardsNextToken } from './list-cloudwatch-dashboards-next-token';

/**
 * List CloudWatch dashboards parameters
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListDashboards.html#API_ListDashboards_RequestParameters ListDashboards Request Parmeters}
 */
export interface ListCloudWatchDashboardsParameters {
  /**
   * Dashboard name prefix
   */
  readonly DashboardNamePrefix?: string;
  /**
   * Next token returned from a previous request
   */
  readonly NextToken?: ListCloudWatchDashboardsNextToken;
}
