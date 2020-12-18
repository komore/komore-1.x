import * as Discord from 'discord.js';

/**
 * Discord integration
 */
export type DiscordIntegration = Readonly<{
  discord: Readonly<{
    webhookClient: Discord.WebhookClient;
  }>;
}>;
