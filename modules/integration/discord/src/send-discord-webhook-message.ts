import * as Discord from 'discord.js';
import { defer, Observable } from 'rxjs';

/**
 * Discord webhook message
 */
export type DiscordWebhookMessage = Readonly<{
  content: Discord.StringResolvable;
  options: Discord.WebhookMessageOptions;
}>;

/**
 * Discord webhook result
 */
export type DiscordWebhookResult = Discord.Message | ReadonlyArray<Discord.Message>;

/**
 * Sends a Discord webhook message
 * @param webhookClient Webhook client
 * @param webhookMessage Webhook message
 * @returns Result messages
 */
export function sendDiscordWebhookMessage(
  webhookClient: Discord.WebhookClient,
  webhookMessage: DiscordWebhookMessage
): Observable<DiscordWebhookResult> {
  return defer(() => webhookClient.send(webhookMessage.content, webhookMessage.options));
}
