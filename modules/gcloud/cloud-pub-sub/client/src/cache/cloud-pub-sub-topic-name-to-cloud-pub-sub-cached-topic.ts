import { type PubSub } from '@google-cloud/pubsub';

import { parseAvroSchema } from '@komore/avro';
import { type CloudPubSubTopicName } from '@komore/gcloud/cloud-pub-sub';
import { defer, fromPromise, map } from '@komore/reactive';

import { type CloudPubSubCachedTopic } from './cloud-pub-sub-cached-topic';

/**
 * Creates a function that returns a Cloud Pub/Sub cached topic, given a topic name
 *
 * @param pubSub Pub/Sub client
 * @returns Function that returns a Cloud Pub/Sub cached topic, given a topic name
 * @private
 */
export function cloudPubSubTopicNameToCloudPubSubCachedTopic(
  pubSub: PubSub
): (topicName: CloudPubSubTopicName) => Observable<CloudPubSubCachedTopic> {
  return topicName =>
    defer(() => {
      const topic = pubSub.topic(topicName);
      return fromPromise(topic.getMetadata()).pipe(
        map(([{ schemaSettings }]) => schemaSettings?.schema ?? undefined),
        map(schema => (schema !== undefined ? parseAvroSchema(schema).valueToBuffer : undefined)),
        map(encoder => ({
          ...(encoder !== undefined ? { encoder } : {}),
          topic,
        }))
      );
    });
}
