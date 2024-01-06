import { addLogEventMapping, createLogEventMapping } from '@komore/logging';
import { createNodeConsoleLogAppender } from '@komore/node/logging';

import { createCliApplicationLogEncoder } from './create-cli-application-log-encoder';

/**
 * Creates a basic setup for a command-line application
 *
 * - Log encoder
 * - Log appender (Node console)
 * - Log event mapping towards the console
 *
 * @private
 */
export function setupCliApplication(): void {
  const encoder = createCliApplicationLogEncoder();
  const target = console;
  const logAppender = createNodeConsoleLogAppender({ encoder, target });
  logAppender;
  // TODO: addLogAppender('console', logAppender);
  const logEventMapping = createLogEventMapping('console');
  addLogEventMapping(logEventMapping);
}
