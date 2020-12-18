import { mapIntegrations, MessageWithIntegrations } from '@komore/integration';
import { Message } from '@komore/message';
import * as Discord from 'discord.js';
import { OperatorFunction, pipe } from 'rxjs';
import { DiscordIntegration } from '../graph/discord-integration';

/**
 * TODO
 * @param webhookId Webhook identifier
 * @param webhookToken Webhook token
 */
export const withDiscordWebhookClient = <
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
> =>
  pipe(
    mapIntegrations(integrations => ({
      ...integrations,
      discord: {
        webhookClient: new Discord.WebhookClient(webhookId, webhookToken)
      }
    }))
  );
