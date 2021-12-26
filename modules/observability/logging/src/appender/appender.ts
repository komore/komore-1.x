import { type NextObserver } from '@komore/reactive';
import { type UntypedLogEventRecord } from '../definition/log-event-record';

/**
 * Appender
 *
 * An appender is responsible of log event record storage.
 *
 * @template LogEventRecordType Log event record type
 */
export type Appender<
  LogEventRecordType extends UntypedLogEventRecord = UntypedLogEventRecord
> = NextObserver<LogEventRecordType>;
