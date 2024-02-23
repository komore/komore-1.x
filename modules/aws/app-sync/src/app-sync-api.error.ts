import { createErrorType } from '@komore/error';

import { appSyncDomain } from './app-sync.domain';

/**
 * AppSync API error
 */
export const appSyncApiError = createErrorType(appSyncDomain, {});
