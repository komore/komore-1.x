import { type PublishOptions } from '@google-cloud/pubsub';

/**
 * Publish to Cloud Pub/Sub options
 */
export interface PublishToCloudPubSubOptions extends PublishOptions {
  /**
   * Publish options for the topic
   */
  readonly message?: PublishOptions;
}
