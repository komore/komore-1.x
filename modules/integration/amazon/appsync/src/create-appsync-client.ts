import type { AppSyncClientConfig } from '@aws-sdk/client-appsync';
import { AppSyncClient } from '@aws-sdk/client-appsync';

/**
 * Creates an AppSync client
 * @param configuration Configuration
 * @returns AppSync client
 */
export function createAppSyncClient(configuration?: AppSyncClientConfig): AppSyncClient {
  return new AppSyncClient(configuration ?? {});
}
