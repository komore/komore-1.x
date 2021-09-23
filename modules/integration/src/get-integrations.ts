import { Message } from '@komore/message';
import { MessageWithIntegrations } from './message-with-integrations';

/**
 * Gets integration information from a message
 * @param message Message
 * @returns Integration information
 * @template MessageTypeName Message type
 * @template MessageMetadataType Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 * @template MessageType Message type
 * @template IntegrationTypes Integration types
 */
export function getIntegrations<
  MessageTypeName extends string,
  MessageMetadataType extends object,
  MessageInputType,
  MessageOutputType,
  MessageType extends Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType>,
  IntegrationTypes extends object
>(
  message: MessageWithIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes
  >
): IntegrationTypes {
  return message.integrations;
}
