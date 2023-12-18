import { type ClientConfig, type PublishOptions } from '@google-cloud/pubsub';

/**
 * Cloud Pub/Sub client options
 */
export interface CloudPubSubClientOptions extends ClientConfig {
  /**
   * Publish options
   */
  readonly publishOptions?: PublishOptions;
  /**
   * Topic name
   */
  readonly topicName: string;
}
