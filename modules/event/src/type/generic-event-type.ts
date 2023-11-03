import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type EventPropertiesSchema } from '../properties/event-properties-schema';
import { type EventType } from './event-type';

/**
 * Generic event type
 */
export type GenericEventType = EventType<GenericDomain, ReadonlyRecord<string, EventPropertiesSchema<unknown>>>;
