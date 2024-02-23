import { runApplication } from '@komore/application';
import { type cliEvent } from '@komore/cli';
import { type GenericCommand } from '@komore/command';
import { type EventFromType } from '@komore/event';
import { createNodeHost } from '@komore/node';
import { catchError, ignoreValues, mapTo, mergeMap, of, race, redactValue, Subject, tapNext } from '@komore/reactive';

import { argvToCommandLineArguments } from './argument/argv-to-command-line-arguments';
import { type CliApplicationOptions } from './cli-application-options';
import { thenLogAndReturnCliExitCode } from './command/then-log-and-return-cli-exit-code';
import { cliEventToConsole } from './event/cli-event-to-console';
import { cliEventsToCliExitCode } from './event/cli-events-to-cli-exit-code';
import { setupCliApplication } from './setup-cli-application';

/**
 * Runs a command-line interface application
 *
 * @param applicationOptions CLI application options
 * @returns CLI application
 */
export function runCliApplication<CommandType extends GenericCommand>(
  applicationOptions: CliApplicationOptions<CommandType>
): Observable<void> {
  const host = createNodeHost();

  return runApplication({
    host,
    main: () => {
      const commandLineArguments = argvToCommandLineArguments(process.argv);
      const events = new Subject<EventFromType<typeof cliEvent>>();
      const events$ = events.asObservable();
      const { createCommandHandler, parametersToCommands } = applicationOptions;
      const commandHandler = createCommandHandler(events);
      const consoleLogs$ = events$.pipe(tapNext(cliEventToConsole()), ignoreValues());
      const exitCodeFromEvents$ = cliEventsToCliExitCode(events$);
      const exitCodeFromCommands$ = parametersToCommands(of(commandLineArguments)).pipe(
        mergeMap(command => commandHandler(command).pipe(mapTo(0), catchError(thenLogAndReturnCliExitCode(console))))
      );

      setupCliApplication();

      return race([consoleLogs$, exitCodeFromEvents$, exitCodeFromCommands$]).pipe(
        tapNext(exitCode => process.exit(exitCode)),
        redactValue()
      );
    },
  });
}
