import { type LogEncoder } from '../encoder/log-encoder';

/**
 * Log appender options
 */
export interface LogAppenderOptions {
  readonly encoder: LogEncoder;
}
