import { createErrorType } from '@komore/error';
import { eventDomain } from '@komore/event';

/**
 * Event store error
 */
export const eventStoreError = createErrorType(eventDomain, {});
