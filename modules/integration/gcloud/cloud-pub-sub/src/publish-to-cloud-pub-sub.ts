import { deferPromise, type Observable } from '@komore/reactive';
import { type CloudPubSubClient } from './cloud-pub-sub-client';
import { type PublishToCloudPubSubOptions } from './publish-to-cloud-pub-sub-options';

/**
 * Publishes a message to a Cloud Pub/Sub topic
 *
 * @param pubSubClient Cloud Pub/Sub client
 * @param topicName Topic name
 * @param data Data to publish
 * @param options Options
 * @returns TODO
 */
export function publishToCloudPubSub(
  pubSubClient: CloudPubSubClient,
  topicName: string,
  data: unknown,
  options?: PublishToCloudPubSubOptions
): Observable<> {
  const topic = pubSubClient.client.topic(topicName, optionsHere);
  return deferPromise(() => pubSubClient.client.topic(topicName, optionsHere).publishMessage(message));
}
