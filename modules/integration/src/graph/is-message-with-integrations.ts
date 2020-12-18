import { Message } from '@komore/message';
import { MessageWithIntegrations } from './message-with-integrations';

/**
 * Tests whether a message includes integration information
 * @param message Message
 * @returns true if the message includes integration information
 * @template MessageTypeName Message type
 * @template MessageMetadataType Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 * @template MessageType Message type
 */
export function isMessageWithIntegrations<
  MessageTypeName extends string,
  MessageMetadataType extends object,
  MessageInputType,
  MessageOutputType,
  MessageType extends Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType>
>(
  message: MessageType
): message is MessageWithIntegrations<
  MessageTypeName,
  MessageMetadataType,
  MessageInputType,
  MessageOutputType,
  MessageType,
  {}
> {
  return 'integrations' in message;
}
