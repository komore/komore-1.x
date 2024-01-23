import { type CreateTopicResponse, type PubSub } from '@google-cloud/pubsub';

import { deferPromise, type Observable } from '@komore/reactive';

import { type CloudPubSubTopicName } from './name/cloud-pub-sub-topic-name';

/**
 * Creates a function that creates a Cloud Pub/Sub topic
 *
 * @param pubSub Pub/Sub client
 * @returns Function that creates a Cloud Pub/Sub topic
 */
export function createCloudPubSubTopic(
  pubSub: PubSub
): (topicName: CloudPubSubTopicName) => Observable<CreateTopicResponse> {
  return topicName => deferPromise(() => pubSub.createTopic(topicName));
}
