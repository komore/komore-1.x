import { createQueryType } from '@komore/query';

import { cloudPubSubDomain } from './cloud-pub-sub.domain';

/**
 * Cloud Pub/Sub query
 */
export const cloudPubSubQuery = createQueryType(cloudPubSubDomain, {});
