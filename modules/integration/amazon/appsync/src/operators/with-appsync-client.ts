import type { AppSyncClient } from '@aws-sdk/client-appsync';
import { withAwsClient } from '@komore/integration-amazon';
import { createAppSyncClient } from '../create-appsync-client';

/**
 * Adds an AppSync client to a message
 * @param appSyncClient AppSync client
 * @returns Unary function that turns a message into a message with an AppSync client
 */
export const withAppSyncClient = (appSyncClient?: AppSyncClient) =>
  withAwsClient('appsync', appSyncClient ?? createAppSyncClient());
