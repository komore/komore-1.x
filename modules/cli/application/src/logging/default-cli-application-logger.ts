import { createLogger, layoutLogEncoder, type Logger } from '@komore/logging';
import { nodeWriteStreamLogAppender } from '@komore/node/logging';

import { cliApplicationLogLayout } from './cli-application-log-layout';

/**
 * Creates a default CLI application logger
 *
 * - Log encoder with a layout
 * - Log appender (Node console)
 * - Log event mapping towards the console
 *
 * @returns Default CLI application logger
 */
export function defaultCliApplicationLogger(): Logger {
  const layout = cliApplicationLogLayout();
  const encoder = layoutLogEncoder({ layout });
  const writeStream = process.stdout;
  const consoleAppender = nodeWriteStreamLogAppender({ encoder, writeStream });
  return createLogger({ appenders: [consoleAppender] });
}
