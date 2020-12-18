import { MessageWithIntegrations } from '@komore/integration';
import { Message } from '@komore/message';
import { DiscordIntegration } from './discord-integration';

/**
 * Message with a Discord integration
 * @template MessageTypeName Message type name
 * @template MessageMetadataType Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 * @template MessageType Message type
 * @template IntegrationTypes Integration types
 * @template MessageWithIntegrationsType Message with integrations type
 */
export type MessageWithDiscordIntegration<
  MessageTypeName extends string,
  MessageMetadataType extends object,
  MessageInputType,
  MessageOutputType,
  MessageType extends Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType>,
  IntegrationTypes extends object,
  MessageWithIntegrationsType extends MessageWithIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes
  >
> = MessageWithIntegrationsType &
  Readonly<{
    integrations: DiscordIntegration;
  }>;
