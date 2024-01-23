import { createEventType } from '@komore/event';

import { eToroDomain } from './etoro.domain';

/**
 * eToro event
 */
export const eToroEvent = createEventType(eToroDomain, {});
