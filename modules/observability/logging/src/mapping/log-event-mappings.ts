import { cache, scan, Subject } from '@komore/reactive';
import { type LogEventMapping } from './log-event-mapping';

const logEventMappingAdded = new Subject<LogEventMapping>();

/**
 * Log event mappings
 */
export const logEventMappings = logEventMappingAdded.asObservable().pipe(
  scan((acc, logEventMapping) => [...acc, logEventMapping], [] as ReadonlyArray<LogEventMapping>),
  cache()
);

/**
 * Adds a log event mapping
 *
 * @param name Registered name
 * @param logAppender Appender
 */
export function addLogEventMapping(logEventMapping: LogEventMapping): void {
  logEventMappingAdded.next(logEventMapping);
}
