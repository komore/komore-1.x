import { type CloudPubSubSubscriptionName } from './cloud-pub-sub-subscription-name';
import { validateCloudPubSubSubscriptionName } from './validate-cloud-pub-sub-subscription-name';

/**
 * Safely casts a string to a Cloud Pub/Sub subscription name
 *
 * @param subscriptionName Subscription name string
 * @returns Cloud Pub/Sub subscription name
 */
export function asCloudPubSubSubscriptionName(subscriptionName: string): CloudPubSubSubscriptionName {
  validateCloudPubSubSubscriptionName(subscriptionName);
  return subscriptionName;
}
