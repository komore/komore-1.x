import { type Temporal } from '@js-temporal/polyfill';
import { type LogEvent } from '../event/log-event';
import { type LogGroup } from '../group/log-group';

/**
 * Log event record
 * @template LogEventType Log event type
 */
export interface LogEventRecord<
  LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
> {
  readonly logContext: Record<string, unknown>;
  readonly logEvent: LogEventType;
  readonly message: string;
  readonly timestamp: Temporal.PlainDateTime;
}

/**
 * Untyped log event record
 */
export type UntypedLogEventRecord = LogEventRecord<
  LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>
>;
