import { createErrorType } from '@komore/error';

import { eventDomain } from './event.domain';

/**
 * Event domain
 */
export const eventError = createErrorType(eventDomain, {});
