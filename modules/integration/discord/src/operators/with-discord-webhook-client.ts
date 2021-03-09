import { mapIntegrations, MessageWithIntegrations } from '@komore/integration';
import type { Message } from '@komore/message';
import type { OperatorFunction } from '@komore/reactive';
import * as Discord from 'discord.js';
import { DiscordIntegration } from '../graph/discord-integration';

/**
 * TODO
 * @param webhookId Webhook identifier
 * @param webhookToken Webhook token
 */
export function withDiscordWebhookClient<
  MessageTypeName extends string,
  MessageMetadataType extends object,
  MessageInputType,
  MessageOutputType,
  MessageType extends Message<MessageTypeName, MessageMetadataType, MessageInputType, MessageOutputType>,
  IntegrationTypes extends object
>(
  webhookId: string,
  webhookToken: string
): OperatorFunction<
  MessageWithIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes
  >,
  MessageWithIntegrations<
    MessageTypeName,
    MessageMetadataType,
    MessageInputType,
    MessageOutputType,
    MessageType,
    IntegrationTypes & DiscordIntegration
  >
> {
  return mapIntegrations(integrations => ({
    ...integrations,
    discord: {
      webhookClient: new Discord.WebhookClient(webhookId, webhookToken)
    }
  }));
}
