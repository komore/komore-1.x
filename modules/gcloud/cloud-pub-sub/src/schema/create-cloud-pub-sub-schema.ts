import { type PubSub, type Schema, type SchemaType } from '@google-cloud/pubsub';

import { deferPromise } from '@komore/reactive';

import { type CloudPubSubSchemaName } from './name/cloud-pub-sub-schema-name';

/**
 * Creates a function that creates a Cloud Pub/Sub schema
 *
 * @param pubSub Pub/Sub client
 * @returns Function that creates a Cloud Pub/Sub schema
 */
export function createCloudPubSubSchema(
  pubSub: PubSub
): (parameters: {
  readonly definition: string;
  readonly schemaName: CloudPubSubSchemaName;
  readonly schemaType: SchemaType;
}) => Observable<Schema> {
  return ({ definition, schemaName, schemaType }) =>
    deferPromise(() => pubSub.createSchema(schemaName, schemaType, definition));
}
