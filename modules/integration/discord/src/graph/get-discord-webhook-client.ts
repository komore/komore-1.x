import { MessageWithIntegrations } from '@komore/integration';
import { Message } from '@komore/message';
import * as Discord from 'discord.js';
import { MessageWithDiscordIntegration } from './message-with-discord-integration';

/**
 * Gets the Discord webhook client from a message
 * @param message Message
 * @returns Client
 * @template MessageTypeName Message type
 * @template MessageMetadataType Message metadata type
 * @template MessageInputType Message input type
 * @template MessageOutputType Message output type
 * @template MessageType Message type
 * @template IntegrationTypes Integration types
 * @template MessageWithIntegrationsType Message with integration type
 */
export function getDiscordWebhookClient<
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
>(
  message: MessageWithDiscordIntegration<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes,
    MessageWithIntegrationsType
  >
): Discord.WebhookClient {
  return message.integrations.discord.webhookClient;
}
