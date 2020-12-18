import { MessageWithIntegrations } from '@komore/integration';
import { Message } from '@komore/message';
import { DiscordWebhookMessage, sendDiscordWebhookMessage } from '../send-discord-webhook-message';
import { getDiscordWebhookClient } from './get-discord-webhook-client';
import { MessageWithDiscordIntegration } from './message-with-discord-integration';

export const discordWebhookMessage = <
  MessageTypeName extends string,
  MessageMetadataType extends object,
  MessageInputType,
  MessageOutputType,
  MessageType extends Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType>,
  IntegrationTypes extends object,
  MessagewithIntegrationsType extends MessageWithIntegrations<
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
    MessagewithIntegrationsType
  >
) => {
  const webhookClient = getDiscordWebhookClient(message);
  return (input: DiscordWebhookMessage) => sendDiscordWebhookMessage(webhookClient, input);
};
