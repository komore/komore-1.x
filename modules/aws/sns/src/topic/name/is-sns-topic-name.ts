import { type SnsTopicName } from './sns-topic-name';

/**
 * Tests whether a string an SNS topic name
 *
 * @param topicName Topic name string
 * @returns true if the string is an SNS topic name
 */
export function isSnsTopicName(topicName: string): topicName is SnsTopicName {
  return /^[a-zA-Z0-9_-]{1,256}$/.test(topicName);
}
