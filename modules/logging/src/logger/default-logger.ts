import { type Logger } from './logger';

/**
 * Default logger
 *
 * @private
 */
export const defaultLogger: {
  instance: Logger | undefined;
} = { instance: undefined };
