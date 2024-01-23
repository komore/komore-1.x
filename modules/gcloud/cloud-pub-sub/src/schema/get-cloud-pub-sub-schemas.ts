import { type ISchema, type PubSub } from '@google-cloud/pubsub';

import { fromIterable, toArray, type Observable } from '@komore/reactive';

/**
 * Creates a function that returns the list of Cloud Pub/Sub schemas
 *
 * @param pubSub Pub/Sub client
 * @returns Function that returns the list of Cloud Pub/Sub schemas
 */
export function getCloudPubSubSchemas(pubSub: PubSub): () => Observable<ReadonlyArray<ISchema>> {
  return () => fromIterable(pubSub.listSchemas()).pipe(toArray());
}
