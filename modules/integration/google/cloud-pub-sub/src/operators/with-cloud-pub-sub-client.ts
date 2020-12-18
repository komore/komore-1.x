import { PubSub } from '@google-cloud/pubsub';

/**
 * Adds a Cloud Pub/Sub client to a message
 * @param cloudPubSubClient Cloud Pub/Sub client
 * @returns Operator function that turns a message into a message with a Cloud Pub/Sub client
 */
export function withCloudPubSubClient(cloudPubSubClient?: PubSub) {
  cloudPubSubClient ??= new PubSub();
}
