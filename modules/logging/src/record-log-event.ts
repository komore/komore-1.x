import { type LogEvent } from './event/log-event';
import { defaultLogger } from './logger/default-logger';

/**
 * Records a log event
 *
 * @param logEvent Log event
 */
export function recordLogEvent(logEvent: LogEvent): void {
  defaultLogger.instance?.(logEvent);
}
