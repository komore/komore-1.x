import { snsDomain, type SnsSubscription } from '@komore/aws/sns';
import { createQueryType, queryProperties } from '@komore/query';

/**
 * SNS query
 */
export const snsQuery = createQueryType(snsDomain, {
  /**
   * Returns the list of SNS subscriptions as a stream
   *
   * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptions.html ListSubscriptions}
   */
  listSubscriptions: queryProperties<SnsSubscription>(),
});
