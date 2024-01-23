import { createEventType, eventProperties } from '@komore/event';

import { type CloudPubSubMessageId } from './api/message/cloud-pub-sub-message-id';
import { type CloudPubSubTopicName } from './api/topic/name/cloud-pub-sub-topic-name';
import { cloudPubSubDomain } from './cloud-pub-sub.domain';

/**
 * Cloud Pub/Sub event
 */
export const cloudPubSubEvent = createEventType(cloudPubSubDomain, {
  /**
   * A message has been published
   */
  messagePublished: eventProperties<{
    /**
     * Message identifier
     */
    readonly messageId: CloudPubSubMessageId;
  }>(),
  /**
   * A topic has been created
   */
  topicCreated: eventProperties<{
    /**
     * Topic name
     */
    topicName: CloudPubSubTopicName;
  }>(),
  /**
   * A topic has been deleted
   */
  topicDeleted: eventProperties<{
    /**
     * Topic name
     */
    topicName: CloudPubSubTopicName;
  }>(),
});
