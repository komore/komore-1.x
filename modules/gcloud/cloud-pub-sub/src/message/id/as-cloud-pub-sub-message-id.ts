import { type CloudPubSubMessageId } from './cloud-pub-sub-message-id';
import { validateCloudPubSubMessageId } from './validate-cloud-pub-sub-message-id';

/**
 * Safely casts a string to a Cloud Pub/Sub message identifier
 *
 * @param messageId Message identifier string
 * @returns Cloud Pub/Sub message identifier
 */
export function asCloudPubSubMessageId(messageId: string): CloudPubSubMessageId {
  validateCloudPubSubMessageId(messageId);
  return messageId;
}
