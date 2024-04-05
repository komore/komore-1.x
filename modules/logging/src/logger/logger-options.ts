import { type ReadonlyRecord } from '@komore/typescript';

import { type LogAppender } from '../appender/log-appender';
import { type LogEvent } from '../event/log-event';
import { type LogEventMapping } from '../mapping/log-event-mapping';

/**
 * Logger options
 */
export interface LoggerOptions {
  /**
   * Appenders
   */
  readonly appenders?: ReadonlyArray<LogAppender>;
  /**
   * Projects a message, given a log event
   */
  readonly eventToMessage?: (event: LogEvent) => string;
  /**
   * Execution context resolver
   */
  readonly executionContext?: () => ReadonlyRecord<string, unknown>;
  /**
   * Mappings
   */
  readonly mappings?: ReadonlyArray<LogEventMapping>;
}
