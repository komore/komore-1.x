import { type DiscordApiClient } from '../discord-api-client';
import { type DiscordGatewayBot } from './discord-gateway-bot';

/**
 * Creates a function that returns the Discord gateway bot information
 *
 * @param apiClient Discord API client
 * @returns Function that returns the Discord gateway bot information
 */
export function getDiscordGatewayBot(apiClient: DiscordApiClient): () => Observable<DiscordGatewayBot> {
  const resourcePath = 'gateway/bot';
  return () => apiClient<DiscordGatewayBot>('GET', resourcePath);
}
