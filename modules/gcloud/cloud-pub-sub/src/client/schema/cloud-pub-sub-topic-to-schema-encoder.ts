import { type Topic } from '@google-cloud/pubsub';

import { deferPromise, map } from '@komore/reactive';

import { type CloudPubSubTopicCache } from '../../handler/cloud-pub-sub-topic-cache';
import { cloudPubSubSchemaSettingsToSchemaEncoder } from './cloud-pub-sub-schema-settings-to-schema-encoder';

/**
 * Returns a schema encoder, given a Cloud Pub/Sub topic
 *
 * @param topic Cloud Pub/Sub topic
 * @returns Schema encoder
 */
export function cloudPubSubTopicToSchemaEncoder(topic: Topic): Observable<CloudPubSubTopicCache['encoder']> {
  return deferPromise(() => topic.getMetadata()).pipe(
    map(([topicMetadata]) => topicMetadata.schemaSettings),
    map(schemaSettings => schemaSettings ?? undefined),
    map(cloudPubSubSchemaSettingsToSchemaEncoder)
  );
}
