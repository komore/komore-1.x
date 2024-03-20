import { type ListSnsSubscriptionsNextToken } from './list-sns-subscriptions-next-token';

/**
 * List SNS subscriptions parameters
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptions.html#API_ListSubscriptions_RequestParameters ListSubscriptions Request Parameters}
 */
export interface ListSnsSubscriptionsParameters {
  /**
   * Token returned by the previous request
   */
  readonly NextToken?: ListSnsSubscriptionsNextToken;
}
