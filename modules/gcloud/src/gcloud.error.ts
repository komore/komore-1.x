import { createErrorType } from '@komore/error';

import { gcloudDomain } from './gcloud.domain';

/**
 * Google Cloud error
 */
export const gcloudError = createErrorType(gcloudDomain, {});
