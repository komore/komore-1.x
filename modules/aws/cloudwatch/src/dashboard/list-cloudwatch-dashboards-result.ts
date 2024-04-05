import { type CloudWatchDashboardEntry } from './cloudwatch-dashboard-entry';
import { type ListCloudWatchDashboardsNextToken } from './list-cloudwatch-dashboards-next-token';

/**
 * List CloudWatch dashboards result
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListDashboards.html#API_ListDashboards_ResponseElements ListDashboards Response Elements}
 */
export interface ListCloudWatchDashboardsResult {
  /**
   * List of dasboard entries
   */
  readonly DashboardEntries: ReadonlyArray<CloudWatchDashboardEntry>;
  /**
   * Next token
   */
  readonly NextToken?: ListCloudWatchDashboardsNextToken;
}
