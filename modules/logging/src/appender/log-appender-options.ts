import { type LogEncoder } from '../encoder/log-encoder';

/**
 * Log appender options
 */
export interface LogAppenderOptions {
  /**
   * Encoder
   */
  readonly encoder: LogEncoder;
}
