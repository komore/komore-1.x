import { bgRedBright, redBright } from 'chalk';

import { isInstanceOf } from '@komore/functional';
import { recordLogEvent } from '@komore/observability/logging';
import { catchError, catchErrorIf, defaultIfEmpty, of } from '@komore/reactive';

import { type CliApplication } from './cli-application';
import { CliError } from './cli-error';
import { type CliOptions } from './cli-options';
import { cliCommandByName } from './command/cli-command-by-name';
import { unknownCliCommand } from './log/cli-logs';

/**
 * Creates a CLI application
 *
 * @param options CLI options
 * @returns CLI application
 */
export function createCliApplication(options: CliOptions): CliApplication {
  return argv => {
    const commandLineArguments = argv[0]?.includes('node') ? argv.slice(1) : argv;
    const [_bin, commandName] = commandLineArguments;
    if (commandName === undefined) {
      throw new Error('TODO: no command name in executeCli');
    }

    const command = options.commands.find(cliCommandByName(commandName));
    if (command === undefined) {
      recordLogEvent(unknownCliCommand({ commandName }));
      return of(1);
    }

    const result$ = command(commandLineArguments.slice(2)).pipe(
      defaultIfEmpty(0),
      catchErrorIf(isInstanceOf(CliError), error => {
        console.log(`Error: ${error}`, error);
        return of(error.exitCode);
      }),
      catchError(error => {
        const errorMessage = error instanceof Error ? error.message : (error as string);
        const message = bgRedBright(' ERROR ') + ' ' + redBright(errorMessage);
        console.log(message);
        return of(1);
      })
    );

    return result$;
  };
}
