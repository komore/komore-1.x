import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type LogEventType } from './log-event-type';

/**
 * Generic log event type
 */
export type GenericLogEventType = LogEventType<GenericDomain, ReadonlyRecord<string, any>>;
