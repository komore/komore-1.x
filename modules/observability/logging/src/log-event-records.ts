import { Subject } from 'rxjs';
import type { UntypedLogEvent } from './log-event';
import type { LogEventRecord } from './log-event-record';

/**
 * Log event records subject
 */
export const logEventRecordsSubject = new Subject<LogEventRecord<UntypedLogEvent>>();

/**
 * Stream of log event records
 */
export const logEventRecords = logEventRecordsSubject.asObservable();
