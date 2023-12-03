import { type GenericCommand } from '@komore/command';
import { defaultIfEmpty, first, ignoreValues, map, mapTo, merge, mergeMap, Subject, tapNext } from '@komore/reactive';

import { argvToCommandLineArguments } from './argument/argv-to-command-line-arguments';
import { type CliApplication } from './cli-application';
import { type CliApplicationOptions } from './cli-application-options';
import { cliApplicationSetup } from './cli-application-setup';
import { cliCommandToProcessExitCode } from './cli-command-to-process-exit-code';
import { type CliEvent } from './cli.event';
import { cliEventToConsole } from './event/cli-event-to-console';

/**
 * Creates a CLI application
 *
 * @param options CLI options
 * @returns CLI application
 */
export function createCliApplication<CommandType extends GenericCommand>(
  options: CliApplicationOptions<CommandType>
): CliApplication {
  const events = new Subject<CliEvent>();
  const toConsole = cliEventToConsole();
  const { parametersToCommand } = options;
  return argv =>
    merge([
      toConsole(events.asObservable()).pipe(defaultIfEmpty(0)),
      cliApplicationSetup.pipe(
        mapTo(argv),
        map(argvToCommandLineArguments),
        mergeMap(parametersToCommand),
        mergeMap(cliCommandToProcessExitCode(events, options))
      ),
    ]).pipe(
      first(),
      tapNext(exitCode => {
        console.log('exit code =', exitCode);
        process.exit(exitCode);
      }),
      ignoreValues()
    );
}
