import { type EventBridgeClient } from '@aws-sdk/client-eventbridge';
import { withAwsClient } from '@komore/integration-aws';
import { createEventBridgeClient } from '../create-event-bridge-client';

/**
 * Adds an EventBridge client to a message
 *
 * @param eventBridgeClient EventBridge client
 * @returns Operator function that turns a message into a message with a EventBridge client
 */
export function withEventBridgeClient(eventBridgeClient?: EventBridgeClient) {
  return withAwsClient('eventbridge', eventBridgeClient ?? createEventBridgeClient());
}
