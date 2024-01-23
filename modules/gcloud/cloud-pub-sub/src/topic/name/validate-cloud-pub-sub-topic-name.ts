import { cloudPubSubTypeError } from '../../cloud-pub-sub-type.error';
import { type CloudPubSubTopicName } from './cloud-pub-sub-topic-name';
import { isCloudPubSubTopicName } from './is-cloud-pub-sub-topic-name';

/**
 * Validates that a string is a valid Cloud Pub/Sub topic name
 *
 * @param topicName Topic name
 */
export function validateCloudPubSubTopicName(topicName: string): asserts topicName is CloudPubSubTopicName {
  if (!isCloudPubSubTopicName(topicName)) {
    throw cloudPubSubTypeError.invalidTopicName({ topicName });
  }
}
