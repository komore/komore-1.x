import { createEventType, type EventFromType } from '@komore/event';

import { adyenDomain } from './adyen.domain';

/**
 * Adyen event
 */
export const adyenEvent = createEventType(adyenDomain, {});

/**
 * Adyen event type
 */
export type AdyenEvent = EventFromType<typeof adyenEvent>;
