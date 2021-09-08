import type { OperatorFunction } from '@komore/reactive';
import { map, mergeMap, pipe } from '@komore/reactive/operators';
import type { CommandProcessor, CommandProcessorCommandType, CommandProcessorMessageType } from './command-processor';

/**
 * Processes a command with a command processor
 * @param commandProcessor Command processor
 * @returns Unary function that processes a message into a command and adds the command to the value
 * @template CP Command processor type
 * @template M Message type
 * @template C Context type
 */
export function processCommandWith<
  CP extends CommandProcessor<unknown, unknown>[],
  M extends CommandProcessorMessageType<CP>,
  C extends Readonly<{ message: M }>
>(
  commandProcessor: CP[number]
): OperatorFunction<C, C & Readonly<{ command: CommandProcessorCommandType<CP> }>> {
  return pipe(
    mergeMap(context => commandProcessor(context.message).pipe(
      map(command => ({
        ...context,
        command
      }))
    ))
  );
}
