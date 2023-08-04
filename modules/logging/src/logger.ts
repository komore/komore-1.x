import { type LogEvent } from './event/log-event';
import { type LogGroup } from './group/log-group';

/**
 * Logger
 */
export interface Logger {
  <LogEventType extends LogEvent<LogGroup<string>, number, string, Record<string, unknown> | undefined>>(
    logEvent: LogEventType
  ): void;
}
