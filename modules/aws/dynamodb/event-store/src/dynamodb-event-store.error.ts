import { createErrorType, errorProperties } from '@komore/error';

import { dynamoDBEventStoreDomain } from './dynamodb-event-store.domain';

/**
 * DynamoDB event store error
 */
export const dynamoDBEventStoreError = createErrorType(dynamoDBEventStoreDomain, {
  /**
   * Invalid event data JSON
   */
  invalidEventDataJson: errorProperties<{
    /**
     * JSON
     */
    readonly json: string;
  }>(),
  /**
   * Missing event attribute
   */
  missingEventAttribute: errorProperties<{
    /**
     * Attribute name
     */
    readonly attributeName: string;
  }>(),
  /**
   * Unknown event name
   */
  unknownEventName: errorProperties<{
    /**
     * Event name
     */
    readonly eventName: string;
  }>(),
});
