import { type LogEvent } from '../event/log-event';

/**
 * Logger
 */
export interface Logger {
  (logEvent: LogEvent): void;
}
