import { auroraDomain } from '@komore/aws/aurora';
import { createEventType } from '@komore/event';

/**
 * Aurora event
 */
export const auroraEvent = createEventType(auroraDomain, {});
