import { deferPromise, type Observable } from '@komore/reactive';
import { type MessagePayload, type WebhookClient, type WebhookMessageOptions } from 'discord.js';

/**
 * Discord webhook result
 */
export type DiscordWebhookResult = unknown; // TODO: APIMessage

/**
 * Sends a Discord webhook message
 * @param webhookClient Webhook client
 * @param webhookMessage Webhook message
 * @returns Result
 */
export function sendDiscordWebhookMessage(
  webhookClient: WebhookClient,
  options: string | MessagePayload | WebhookMessageOptions
): Observable<DiscordWebhookResult> {
  return deferPromise(() => webhookClient.send(options));
}
