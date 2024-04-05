import { defaultLogger } from './default-logger';
import { type Logger } from './logger';

/**
 * Sets the default logger
 *
 * @param logger Logger
 */
export function setDefaultLogger(logger: Logger | undefined): void {
  defaultLogger.instance = logger;
}
