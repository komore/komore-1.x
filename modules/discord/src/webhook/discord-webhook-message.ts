import { type WebhookMessageOptions } from 'discord.js';

/**
 * Discord webhook message
 */
export interface DiscordWebhookMessage {
  readonly content: Discord.StringResolvable;
  readonly options: WebhookMessageOptions;
}
