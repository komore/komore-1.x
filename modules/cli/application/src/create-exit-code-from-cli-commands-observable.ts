import { CommandHandler, GenericCommand } from '@komore/command';
import { type Observable } from '@komore/reactive';

export function createExitCodeFromCliCommandsObservable<CommandType extends GenericCommand>(
  commandHandler: CommandHandler<CommandType>
): Observable<number> {
  return parametersToCommands(of(commandLineArguments)).pipe(
    mergeMap(command => commandHandler(command).pipe(mapTo(0), catchError(thenLogAndReturnCliExitCode(console))))
  );
}
