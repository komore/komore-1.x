import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type EventType } from './event-type';

/**
 * Generic event type
 */
export type GenericEventType = EventType<Domain, ReadonlyRecord<string, any>>;
