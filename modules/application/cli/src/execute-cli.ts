import { isInstanceOf } from '@komore/functional';
import { catchError, catchErrorIf, defaultIfEmpty, firstValueFrom, of } from '@komore/reactive';
import { CliError } from './cli-error';
import { type CliOptions } from './cli-options';
import { type CliCommand } from './command/cli-command';

/**
 * Executes the CLI
 * @param argv Command-line arguments
 * @param options Options
 */
export async function executeCli(argv: ReadonlyArray<string>, options: CliOptions): Promise<never> {
  console.log('behooold', argv, options);
  const [_bin, commandName] = argv;
  const command = options.commands.find(cliCommandByName(commandName));
  if (command === undefined) {
    console.error(`unknown command "${commandName}"`);
    process.exit(1);
  }

  const result$ = command(argv.slice(2)).pipe(
    defaultIfEmpty(0),
    catchErrorIf(isInstanceOf(CliError), error => {
      console.log(`Error: ${error}`, error);
      return of(error.exitCode);
    }),
    catchError(error => {
      console.error('Unknown error', error);
      return of(1);
    })
  );

  const result = await firstValueFrom(result$);

  process.exit(result);
}

function cliCommandByName(commandName: string): (cliCommand: CliCommand<string>) => boolean {
  return cliCommand => cliCommand.commandName === commandName;
}
