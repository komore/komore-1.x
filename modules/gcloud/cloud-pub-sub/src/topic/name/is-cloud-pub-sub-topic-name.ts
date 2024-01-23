import { type CloudPubSubTopicName } from './cloud-pub-sub-topic-name';

/**
 * Tests whether a string is a valid Cloud Pub/Sub topic name
 *
 * @param topicName Topic name
 * @returns true if the string is a valid Cloud Pub/Sub topic name
 */
export function isCloudPubSubTopicName(topicName: string): topicName is CloudPubSubTopicName {
  const { length } = topicName;
  return 3 <= length && length <= 255;
}
