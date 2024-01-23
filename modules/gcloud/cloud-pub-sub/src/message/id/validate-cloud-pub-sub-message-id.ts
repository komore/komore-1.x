import { cloudPubSubTypeError } from '../../cloud-pub-sub-type.error';
import { type CloudPubSubMessageId } from './cloud-pub-sub-message-id';
import { isCloudPubSubMessageId } from './is-cloud-pub-sub-message-id';

/**
 * Validates that a string is a valid Cloud Pub/Sub message identifier
 *
 * @param messageId Message identifier
 */
export function validateCloudPubSubMessageId(messageId: string): asserts messageId is CloudPubSubMessageId {
  if (!isCloudPubSubMessageId(messageId)) {
    throw cloudPubSubTypeError.invalidMessageId({ messageId });
  }
}
