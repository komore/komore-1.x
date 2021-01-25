import type { EventBridgeClient } from '@aws-sdk/client-eventbridge';
import { withAmazonClient } from '@komore/integration-amazon';
import { createEventBridgeClient } from '../create-event-bridge-client';

/**
 * Adds an EventBridge client to a message
 * @param eventBridgeClient EventBridge client
 * @returns Operator function that turns a message into a message with a EventBridge client
 */
export const withEventBridgeClient = (eventBridgeClient?: EventBridgeClient) =>
  withAmazonClient('eventbridge', eventBridgeClient ?? createEventBridgeClient());
