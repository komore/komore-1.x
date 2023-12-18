import { createErrorType } from '@komore/error';

import { cloudPubSubDomain } from './cloud-pub-sub.domain';

/**
 * Cloud Pub/Sub error
 */
export const cloudPubSubError = createErrorType(cloudPubSubDomain, {});
