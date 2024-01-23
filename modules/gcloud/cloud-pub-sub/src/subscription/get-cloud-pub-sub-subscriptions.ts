import { Subscription, type PubSub } from '@google-cloud/pubsub';

import { deferPromise, map, type Observable } from '@komore/reactive';

import { type CloudPubSubTopicName } from '../topic/name/cloud-pub-sub-topic-name';

/**
 * Creates a function that returns a Cloud Pub/Sub topic's subscriptions
 *
 * @param pubSub Pub/Sub client
 * @returns Function that returns a Cloud Pub/Sub topic's subscriptions
 */
export function getCloudPubSubSubscriptions(
  pubSub: PubSub
): (topicName: CloudPubSubTopicName) => Observable<ReadonlyArray<Subscription>> {
  return topic => deferPromise(() => pubSub.getSubscriptions({ topic })).pipe(map(([subscriptions]) => subscriptions));
}
