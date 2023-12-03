import { bgRedBright, redBright } from 'chalk';

import { type GenericCommand } from '@komore/command';
import { isErrorOfType, isKomoreError } from '@komore/error';
import { catchError, catchErrorIf, mapTo, of, type Observable, type Subject } from '@komore/reactive';

import { type CliApplicationOptions } from './cli-application-options';
import { cliError } from './cli.error';
import { type CliEvent } from './cli.event';

/**
 * Returns a function that processes a command-line interface command and returns the process exit tcode
 *
 * @param events Command-line event subject
 * @param options Command-line application options
 * @returns Function that processes a command-line interface command and returns the process exit tcode
 */
export function cliCommandToProcessExitCode<CommandType extends GenericCommand>(
  events: Subject<CliEvent>,
  options: CliApplicationOptions<CommandType>
): (command: CommandType) => Observable<number> {
  const handler = options.commandHandler(events);

  return command =>
    handler(command).pipe(
      mapTo(0),
      catchErrorIf(isErrorOfType(cliError), error => {
        console.log(`Error: ${error}`, error);
        return of(error.context.exitCode);
      }),
      catchError(error => {
        const errorMessage =
          error instanceof Error
            ? isKomoreError(error)
              ? JSON.stringify(error, undefined, 2)
              : error.message
            : (error as string);
        const message = bgRedBright(' TEMP-ERROR ') + ' ' + redBright(errorMessage);
        console.log(message);
        if (error instanceof Error) {
          console.log(error.stack);
        }
        return of(1);
      })
    );
}
