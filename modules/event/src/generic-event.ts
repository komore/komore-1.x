import { type GenericDomain } from '@komore/domain';

import { type Event } from './event';

/**
 * Generic event
 */
export type GenericEvent = Event<GenericDomain, string, any>;
