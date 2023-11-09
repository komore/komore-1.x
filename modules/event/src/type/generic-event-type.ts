import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type EventType } from './event-type';

/**
 * Generic event type
 */
export type GenericEventType = EventType<GenericDomain, ReadonlyRecord<string, any>>;
