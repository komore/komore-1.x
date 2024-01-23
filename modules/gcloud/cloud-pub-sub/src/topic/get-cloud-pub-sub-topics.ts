import { type PubSub, type Topic } from '@google-cloud/pubsub';

import { deferPromise, map, type Observable } from '@komore/reactive';

/**
 * Creates a function that returns the list of Cloud Pub/Sub topics
 *
 * @param pubSub Pub/Sub client
 * @returns Function that returns the list of Cloud Pub/Sub topics
 */
export function getCloudPubSubTopics(pubSub: PubSub): () => Observable<ReadonlyArray<Topic>> {
  return () => deferPromise(() => pubSub.getTopics({})).pipe(map(([response]) => response));
}
