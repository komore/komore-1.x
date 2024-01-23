import { type CloudPubSubMessageId } from './cloud-pub-sub-message-id';

/**
 * Tests whether a string is a valid Cloud Pub/Sub message identifier
 *
 * @param messageId Message identifier
 * @returns true if the string is a valid Cloud Pub/Sub message identifier
 */
export function isCloudPubSubMessageId(messageId: string): messageId is CloudPubSubMessageId {
  const { length } = messageId;
  return 3 <= length && length <= 255;
}
