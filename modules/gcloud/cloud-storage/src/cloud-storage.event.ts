import { createEventType, eventProperties } from '@komore/event';
import { type UrlString } from '@komore/url';

import { cloudStorageDomain } from './cloud-storage.domain';

/**
 * Cloud Storage event
 */
export const cloudStorageEvent = createEventType(cloudStorageDomain, {
  /**
   * A pre-signed URL has been created
   *
   * @param preSignedUrl Pre-signed URL
   */
  preSignedUrlCreated: eventProperties<{ readonly preSignedUrl: UrlString }>(),
});
