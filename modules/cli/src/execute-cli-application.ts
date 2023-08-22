import { addLogEventMapping, createLogEventMapping } from '@komore/logging';
import { createNodeConsoleLogAppender } from '@komore/logging/node';
import { firstValueFrom } from '@komore/reactive';
import { createNodeHost } from '@komore/node';

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
  nodeHost; // TODO
  /*
  addLogAppender(
    'console',*/
  createNodeConsoleLogAppender({
    encoder: createCliApplicationLogEncoder(),
    target: console,
  }); /*
  );*/

  addLogEventMapping(createLogEventMapping('console'));

  try {
    const exitCode$ = cliApplication(argv ?? process.argv);
    const exitCode = await firstValueFrom(exitCode$);

    process.exit(exitCode);
  } catch (e) {
    console.error('unhandled exception', e);
    process.exit(255);
  }
}
