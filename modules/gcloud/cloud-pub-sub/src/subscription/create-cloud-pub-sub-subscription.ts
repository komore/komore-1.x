import { CreateSubscriptionOptions, type CreateSubscriptionResponse, type PubSub } from '@google-cloud/pubsub';

import { deferPromise, type Observable } from '@komore/reactive';

import { type CloudPubSubSubscriptionName } from './name/cloud-pub-sub-subscription-name';
import { type CloudPubSubTopicName } from '../topic/name/cloud-pub-sub-topic-name';

/**
 * Creates a function that creates a Cloud Pub/Sub subscription
 *
 * @param pubSub Pub/Sub client
 * @returns Function that creates a Cloud Pub/Sub subscription
 */
export function createCloudPubSubSubscription(
  pubSub: PubSub
): (parameters: {
  readonly subscriptionName: CloudPubSubSubscriptionName;
  readonly topicName: CloudPubSubTopicName;
  readonly options?: CreateSubscriptionOptions;
}) => Observable<CreateSubscriptionResponse> {
  return ({ subscriptionName, topicName, options }) =>
    deferPromise(() => pubSub.createSubscription(topicName, subscriptionName, options));
}
