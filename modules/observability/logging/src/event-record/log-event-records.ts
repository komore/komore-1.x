import { shareReplay, Subject } from '@komore/reactive';
import { type UntypedLogEvent } from '../event/log-event';
import { type LogEventRecord } from './log-event-record';

/**
 * Log event records subject
 */
export const logEventRecordsSubject = new Subject<LogEventRecord<UntypedLogEvent>>();

/**
 * Stream of log event records
 */
export const logEventRecords = logEventRecordsSubject.asObservable().pipe(
  shareReplay({ bufferSize: 100, refCount: false })
);
