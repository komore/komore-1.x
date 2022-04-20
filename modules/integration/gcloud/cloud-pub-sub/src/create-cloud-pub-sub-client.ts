import { PubSub } from '@google-cloud/pubsub';
import { type CloudPubSubClient } from './cloud-pub-sub-client';
import { type CloudPubSubClientOptions } from './cloud-pub-sub-client-options';

/**
 * Creates a Cloud Pub/Sub client
 *
 * @param options Options
 * @returns Cloud Pub/Sub client
 */
export function createCloudPubSubClient(options?: CloudPubSubClientOptions): CloudPubSubClient {
  const client = new PubSub(options);
  return {
    client,
  };
}
