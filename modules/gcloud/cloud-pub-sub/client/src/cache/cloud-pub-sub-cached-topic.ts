import { type Topic } from '@google-cloud/pubsub';

import { type CloudPubSubCachedEncoder } from './cloud-pub-sub-cached-encoder';

/**
 * Cloud Pub/Sub cached topic
 */
export interface CloudPubSubCachedTopic {
  /**
   * Encoder
   */
  readonly encoder?: CloudPubSubCachedEncoder;
  /**
   * Topic
   */
  readonly topic: Topic;
}
