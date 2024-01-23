import { type CloudPubSubSubscriptionName } from './cloud-pub-sub-subscription-name';

/**
 * Tests whether a string is a valid Cloud Pub/Sub subscription name
 *
 * @param subscriptionName Subscription name
 * @returns true if the string is a valid Cloud Pub/Sub subscription name
 */
export function isCloudPubSubSubscriptionName(
  subscriptionName: string
): subscriptionName is CloudPubSubSubscriptionName {
  const { length } = subscriptionName;
  return 3 <= length && length <= 255;
}
