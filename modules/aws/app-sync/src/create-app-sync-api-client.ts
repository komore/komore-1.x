import { createAwsApiClient } from '@komore/aws';

import { type AppSyncApiClient } from './app-sync-api-client';
import { type AppSyncApiClientOptions } from './app-sync-api-client-options';

/**
 * Creates an AppSync API client
 *
 * @param clientOptions AppSync API client options
 * @returns AppSync API client
 */
export function createAppSyncApiClient(clientOptions: AppSyncApiClientOptions): AppSyncApiClient {
  const { ...awsClientOptions } = clientOptions;
  return createAwsApiClient(awsClientOptions);
}
