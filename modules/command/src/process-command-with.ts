import { Observable, pipe, UnaryFunction } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CommandProcessor, CommandProcessorCommandType, CommandProcessorMessageType } from './command-processor';

/**
 * Processes a command with a command processor
 * @param commandProcessor Command processor
 * @returns Unary function that processes a message into a command and adds the command to the value
 * @template CP Command processor type
 * @template M Message type
 * @template C Context type
 */
export function processCommandWith<
  CP extends CommandProcessor<any, any>[],
  M extends CommandProcessorMessageType<CP>,
  C extends Readonly<{ message: M }>
>(
  commandProcessor: CP[number]
): UnaryFunction<Observable<C>, Observable<C & Readonly<{ command: CommandProcessorCommandType<CP> }>>> {
  return pipe(
    mergeMap(context => commandProcessor(context.message).pipe(
      map(command => ({
        ...context,
        command
      }))
    ))
  );
}
