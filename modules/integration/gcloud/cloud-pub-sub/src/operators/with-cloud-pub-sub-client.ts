import { type CloudPubSubClient } from '../cloud-pub-sub-client';
import { createCloudPubSubClient } from '../create-cloud-pub-sub-client';

/**
 * Adds a Cloud Pub/Sub client to a message
 *
 * @param cloudPubSubClient Cloud Pub/Sub client
 * @returns Operator function that turns a message into a message with a Cloud Pub/Sub client
 */
export function withCloudPubSubClient(cloudPubSubClient?: CloudPubSubClient) {
  const client = cloudPubSubClient ?? createCloudPubSubClient();
  client;
  // TODO
}
