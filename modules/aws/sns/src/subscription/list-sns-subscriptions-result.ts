import { type ListSnsSubscriptionsNextToken } from './list-sns-subscriptions-next-token';
import { type SnsSubscription } from './sns-subscription';

/**
 * List SNS subscriptions result
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptions.html#API_ListSubscriptions_ResponseElements ListSubscriptions Response Elements}
 */
export interface ListSnsSubscriptionsResult {
  /**
   * Next token, if more subscriptions are available
   */
  readonly NextToken?: ListSnsSubscriptionsNextToken;
  /**
   * List of subscriptions
   */
  readonly Subscriptions: ReadonlyArray<SnsSubscription>;
}
