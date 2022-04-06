import { EventBridgeClient, type EventBridgeClientConfig } from '@aws-sdk/client-eventbridge';

/**
 * Creates an EventBridge client
 * @param configuration Configuration
 * @returs EventBridge client
 */
export function createEventBridgeClient(configuration?: EventBridgeClientConfig): EventBridgeClient {
  return new EventBridgeClient(configuration ?? {});
}
