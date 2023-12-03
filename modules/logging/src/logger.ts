import { type GenericLogEvent } from './event/generic-log-event';

/**
 * Logger
 */
export interface Logger {
  (logEvent: GenericLogEvent): void;
}
