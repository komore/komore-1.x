import { createErrorType } from '@komore/error';

import { appSyncDomain } from './app-sync.domain';

/**
 * AppSync type error
 */
export const appSyncTypeError = createErrorType(appSyncDomain, {});
