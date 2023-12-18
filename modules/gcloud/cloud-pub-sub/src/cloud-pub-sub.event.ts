import { createEventType } from '@komore/event';

import { cloudPubSubDomain } from './cloud-pub-sub.domain';

/**
 * Cloud Pub/Sub event
 */
export const cloudPubSubEvent = createEventType(cloudPubSubDomain, {});
