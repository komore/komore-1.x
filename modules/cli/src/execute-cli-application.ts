import { firstValueFrom } from '@komore/reactive';

import { type CliApplication } from './cli-application';

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
  try {
    const exitCode$ = cliApplication(argv ?? process.argv);
    const exitCode = await firstValueFrom(exitCode$);

    process.exit(exitCode);
  } catch (e) {
    console.error('unhandled exception', e);
    process.exit(255);
  }
}
