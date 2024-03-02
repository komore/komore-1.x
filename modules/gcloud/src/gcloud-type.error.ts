import { createErrorType, errorProperties } from '@komore/error';

import { gcloudDomain } from './gcloud.domain';

/**
 * Google Cloud type error
 */
export const gcloudTypeError = createErrorType(gcloudDomain, {
  /**
   * Invalid project identifier
   */
  invalidProjectId: errorProperties<{
    /**
     * Project identifier
     */
    readonly projectId: string;
  }>(),
  /**
   * Invalid region
   */
  invalidRegion: errorProperties<{
    /**
     * Region
     */
    readonly region: string;
  }>(),
});
