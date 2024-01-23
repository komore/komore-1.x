import { type PubSub } from '@google-cloud/pubsub';

/**
 * Cloud Pub/Sub client options
 */
export interface CloudPubSubClientOptions {
  /**
   * Google Cloud project identifier
   */
  readonly pubSub: PubSub;
}
