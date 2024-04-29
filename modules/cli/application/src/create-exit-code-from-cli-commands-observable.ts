import { type CommandHandler, type Command } from '@komore/command';

export function createExitCodeFromCliCommandsObservable<CommandType extends Command>(
  commandHandler: CommandHandler<CommandType>
): Observable<number> {
  return parametersToCommands(of(commandLineArguments)).pipe(
    mergeMap(command => commandHandler(command).pipe(mapTo(0), catchError(thenLogAndReturnCliExitCode(console))))
  );
}
