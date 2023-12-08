import { createEventType } from '@komore/event';

import { squareDomain } from './square.domain';

/**
 * Square event
 */
export const squareEvent = createEventType(squareDomain, {});
