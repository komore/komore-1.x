import { Message } from '@komore/message';

/**
 * Message with integrations
 * @template MessageTypeName Message type name
 * @template MessageMetadataType Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 * @template MessageType Message type
 * @template IntegrationTypes Integration types
 */
export type MessageWithIntegrations<
  MessageTypeName extends string,
  MessageMetadataType extends object,
  MessageInputType,
  MessageOutputType,
  MessageType extends Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType>,
  IntegrationTypes extends object
> = MessageType &
  Readonly<{
    integrations: IntegrationTypes;
  }>;

export type MutatedIntegrationTypes<MessageType, IntegrationTypes extends object> = Omit<MessageType, 'integrations'> &
  Readonly<{
    integrations: IntegrationTypes;
  }>;
