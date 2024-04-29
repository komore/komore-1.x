import { comprehendDomain } from '@komore/aws/comprehend';
import { createEventType } from '@komore/event';

/**
 * Comprehend event
 */
export const comprehendEvent = createEventType(comprehendDomain, {});
