import { type Domain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type LogEventType } from './log-event-type';

/**
 * Generic log event type
 */
export type GenericLogEventType = LogEventType<Domain, ReadonlyRecord<string, any>>;
