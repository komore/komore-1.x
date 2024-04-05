import { type DateTimeString } from '@komore/temporal';

import { type Route53HostedZoneChangeId } from './id/route-53-hosted-zone-change-id';
import { type Route53HostedZoneChangeStatus } from './status/route-53-hosted-zone-change-status';

/**
 * Route 53 hosted zone change information
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeInfo.html ChangeInfo}
 */
export interface Route53HostedZoneChangeInformation {
  /**
   * Comment
   */
  readonly Comment?: string;
  /**
   * Change identifier
   */
  readonly Id: Route53HostedZoneChangeId;
  /**
   * Change status
   */
  readonly Status: Route53HostedZoneChangeStatus;
  /**
   * When the change request was submitted
   */
  readonly SubmittedAt: DateTimeString;
}
