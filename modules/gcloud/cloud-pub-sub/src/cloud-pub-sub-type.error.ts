import { createErrorType, errorProperties } from '@komore/error';

import { cloudPubSubDomain } from './cloud-pub-sub.domain';

/**
 * Cloud Pub/Sub type error
 */
export const cloudPubSubTypeError = createErrorType(cloudPubSubDomain, {
  /**
   * Invalid message identifier
   */
  invalidMessageId: errorProperties<{
    /**
     * Message identifier
     */
    readonly messageId: string;
  }>(),
  /**
   * Invalid schema name
   */
  invalidSchemaName: errorProperties<{
    /**
     * Schema name
     */
    readonly schemaName: string;
  }>(),
  /**
   * Invalid subscription name
   */
  invalidSubscriptionName: errorProperties<{
    /**
     * Subscription name
     */
    readonly subscriptionName: string;
  }>(),
  /**
   * Invalid topic name
   */
  invalidTopicName: errorProperties<{
    /**
     * Topic name
     */
    readonly topicName: string;
  }>(),
});
