import { createErrorType, errorProperties } from '@komore/error';

import { gcloudDomain } from './gcloud.domain';

/**
 * Google Cloud error
 */
export const gcloudError = createErrorType(gcloudDomain, {
  /**
   * Invalid project identifier
   */
  invalidProjectId: errorProperties<{ readonly projectId: string }>(),
});
