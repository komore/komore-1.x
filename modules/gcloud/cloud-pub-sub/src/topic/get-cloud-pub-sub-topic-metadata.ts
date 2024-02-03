import { type PubSub, type TopicMetadata } from '@google-cloud/pubsub';

import { deferPromise, map } from '@komore/reactive';

import { type CloudPubSubTopicName } from './name/cloud-pub-sub-topic-name';

/**
 * Creates a function that returns a Cloud Pub/Sub topic's metadata
 *
 * @param pubSub Pub/Sub client
 * @returns Function that returns a Cloud Pub/Sub topic's metadata
 */
export function getCloudPubSubTopicMetadata(
  pubSub: PubSub
): (topicName: CloudPubSubTopicName) => Observable<TopicMetadata> {
  return topicName => deferPromise(() => pubSub.topic(topicName).getMetadata()).pipe(map(([metadata]) => metadata));
}
