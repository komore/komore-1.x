import { type PubSub } from '@google-cloud/pubsub';

import { type CloudPubSubCachedTopicMap } from '../cache/cloud-pub-sub-cached-topic-map';

/**
 * Cloud Pub/Sub query handler options
 */
export interface CloudPubSubQueryHandlerOptions {
  /**
   * Cached topics
   */
  readonly cachedTopics: CloudPubSubCachedTopicMap;
  /**
   * Pub/Sub client
   */
  readonly pubSub: PubSub;
}
