import { createEventType } from '@komore/event';
import { poetryDomain } from '@komore/poetry';

/**
 * Poetry event
 */
export const poetryEvent = createEventType(poetryDomain, {});
