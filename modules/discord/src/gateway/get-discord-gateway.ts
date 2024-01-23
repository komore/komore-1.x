import { type Observable } from 'rxjs';

import { type DiscordApiClient } from '../discord-api-client';
import { type DiscordGateway } from './discord-gateway';

/**
 * Creates a function that returns the Discord gateway information
 *
 * @param apiClient Discord API client
 * @returns Function that returns the Discord gateway information
 * @note Does not require authentication
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway Get Gateway}
 */
export function getDiscordGateway(apiClient: DiscordApiClient): () => Observable<DiscordGateway> {
  const resourcePath = 'gateway';
  return () => apiClient<DiscordGateway>('GET', resourcePath);
}
