import type { MessagePayload, WebhookClient, WebhookMessageOptions } from 'discord.js';
import { defer, Observable } from 'rxjs';

type APIMessage = 

/**
 * Discord webhook result
 */
export type DiscordWebhookResult = Discord.Message | ReadonlyArray<Discord.APIMessage>;

/**
 * Sends a Discord webhook message
 * @param webhookClient Webhook client
 * @param webhookMessage Webhook message
 * @returns Result messages
 */
export function sendDiscordWebhookMessage(
  webhookClient: WebhookClient,
  options: string | MessagePayload | WebhookMessageOptions
): Observable<DiscordWebhookResult> {
  return defer(() => webhookClient.send(options));
}
