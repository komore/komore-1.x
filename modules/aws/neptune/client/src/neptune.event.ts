import { neptuneDomain } from '@komore/aws/neptune';
import { createEventType } from '@komore/event';

/**
 * Neptune event
 */
export const neptuneEvent = createEventType(neptuneDomain, {});
