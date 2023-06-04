import {
  addLogAppender,
  addLogEventMapping,
  createLogEventMapping,
  enableLogging,
} from '@komore/observability/logging';
import { createNodeConsoleLogAppender } from '@komore/observability/node';
import { firstValueFrom } from '@komore/reactive';
import { createNodeHost } from '@komore/runtime/node';

import { type CliApplication } from './cli-application';
import { createCliApplicationLogEncoder } from './log/create-cli-application-log-encoder';

/**
 * Executes a command-line interface application
 *
 * @param cliApplication Command-line interface application
 * @param argv Command-line arguments
 */
export async function executeCliApplication(
  cliApplication: CliApplication,
  argv?: ReadonlyArray<string>
): Promise<never> {
  const nodeHost = createNodeHost();

  enableLogging().subscribe();

  addLogAppender(
    'console',
    createNodeConsoleLogAppender({
      encoder: createCliApplicationLogEncoder(),
      target: console,
    })
  );

  addLogEventMapping(createLogEventMapping('console'));

  const exitCode$ = cliApplication(argv ?? process.argv, nodeHost);
  const exitCode = await firstValueFrom(exitCode$);

  process.exit(exitCode);
}
