import { cloudPubSubTypeError } from '../../cloud-pub-sub-type.error';
import { type CloudPubSubSubscriptionName } from './cloud-pub-sub-subscription-name';
import { isCloudPubSubSubscriptionName } from './is-cloud-pub-sub-subscription-name';

/**
 * Validates that a string is a valid Cloud Pub/Sub subscription name
 *
 * @param subscriptionName Subscription name
 */
export function validateCloudPubSubSubscriptionName(
  subscriptionName: string
): asserts subscriptionName is CloudPubSubSubscriptionName {
  if (!isCloudPubSubSubscriptionName(subscriptionName)) {
    throw cloudPubSubTypeError.invalidSubscriptionName({ subscriptionName });
  }
}
