import { createEventType, type EventFromType } from '@komore/event';

import { adyenDomain } from './adyen.domain';

/**
 * Adyen event
 */
export const adyenEvent = createEventType(adyenDomain, {});
