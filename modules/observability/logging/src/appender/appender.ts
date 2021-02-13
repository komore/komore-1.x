import type { NextObserver } from 'rxjs';
import type { UntypedLogEventRecord } from '../log-event-record';

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
