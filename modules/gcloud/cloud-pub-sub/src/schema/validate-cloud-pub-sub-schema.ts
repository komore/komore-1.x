import { type ISchema, type PubSub } from '@google-cloud/pubsub';

import { deferPromise, type Observable } from '@komore/reactive';

/**
 * Creates a function that validates a Cloud Pub/Sub schema
 *
 * @param pubSub Pub/Sub client
 * @returns Function that validates a Cloud Pub/Sub schema
 */
export function validateCloudPubSubSchema(pubSub: PubSub): (schema: ISchema) => Observable<void> {
  return schema => deferPromise(() => pubSub.validateSchema(schema));
}
