import { type CloudPubSubTopicName } from './cloud-pub-sub-topic-name';
import { validateCloudPubSubTopicName } from './validate-cloud-pub-sub-topic-name';

/**
 * Safely casts a string to a Cloud Pub/Sub topic name
 *
 * @param topicName Topic name string
 * @returns Cloud Pub/Sub topic name
 */
export function asCloudPubSubTopicName(topicName: string): CloudPubSubTopicName {
  validateCloudPubSubTopicName(topicName);
  return topicName;
}
