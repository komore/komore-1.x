import { type PubSub } from '@google-cloud/pubsub';

import { deferPromise } from '@komore/reactive';

import { type CloudPubSubSchemaName } from './name/cloud-pub-sub-schema-name';

/**
 * Creates a delete schema Cloud Pub/Sub command-event handler
 *
 * @param pubSub Pub/Sub client
 * @returns Delete schema Cloud Pub/Sub command-event handler
 */
export function deleteCloudPubSubSchema(pubSub: PubSub): (schemaName: CloudPubSubSchemaName) => Observable<void> {
  return schemaName => deferPromise(() => pubSub.schema(schemaName).delete());
}
