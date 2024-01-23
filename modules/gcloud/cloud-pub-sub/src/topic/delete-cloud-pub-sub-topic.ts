import { type PubSub } from '@google-cloud/pubsub';

import { deferPromise, redactValue, type Observable } from '@komore/reactive';

import { type CloudPubSubTopicName } from './name/cloud-pub-sub-topic-name';

/**
 * Creates a function that deletes a Cloud Pub/Sub topic
 *
 * @param pubSub Pub/Sub client
 * @returns Function that deletes a Cloud Pub/Sub topic
 */
export function deleteCloudPubSubTopic(pubSub: PubSub): (topicName: CloudPubSubTopicName) => Observable<void> {
  return topicName => deferPromise(() => pubSub.topic(topicName).delete()).pipe(redactValue());
}
