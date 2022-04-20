import { cache, map, scan, Subject } from '@komore/reactive';
import { type LogAppender } from './log-appender';

const logAppenderAdded = new Subject<readonly [name: string, logAppender: LogAppender]>();

/**
 * Log appenders
 */
export const logAppenders = logAppenderAdded.asObservable().pipe(
  scan((acc, logAppender) => [...acc, logAppender], [] as ReadonlyArray<readonly [string, LogAppender]>),
  map(entries => new Map(entries) as ReadonlyMap<string, LogAppender>),
  cache()
);

/**
 * Adds a log appender
 *
 * @param name Registered name
 * @param logAppender Appender
 */
export function addLogAppender(name: string, logAppender: LogAppender): void {
  logAppenderAdded.next([name, logAppender]);
}
