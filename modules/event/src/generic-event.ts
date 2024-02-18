import { type Domain } from '@komore/domain';

import { type Event } from './event';

/**
 * Generic event
 */
export type GenericEvent = Event<Domain, string, any>;
