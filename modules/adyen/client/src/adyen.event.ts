import { adyenDomain } from '@komore/adyen';
import { createEventType } from '@komore/event';

/**
 * Adyen event
 */
export const adyenEvent = createEventType(adyenDomain, {});
