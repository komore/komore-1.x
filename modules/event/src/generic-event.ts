import { type GenericDomain } from '@komore/domain';

import { type Event } from './event';
import { type EventPropertiesSchema } from './properties/event-properties-schema';
import { type GenericEventType } from './type/generic-event-type';

/**
 * Generic event
 */
export type GenericEvent = Event<GenericDomain, GenericEventType, string, EventPropertiesSchema<unknown>>;
