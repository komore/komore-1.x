import { type PubSub } from '@google-cloud/pubsub';

/**
 * Cloud Pub/Sub client
 */
export interface CloudPubSubClient {
  /**
   * Client
   */
  readonly client: PubSub;
}
