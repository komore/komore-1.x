import type { Observable } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import type { CommandProcessor, CommandProcessorCommandType, CommandProcessorMessageType } from './command-processor';

/**
 * Processes a command
 * @param message Message
 * @param commandProcessor Command processor
 * @returns Message with its processed command
 * @template CP Command processor type
 * @template M Message type
 * @template C Context type
 */
export function processCommand<
  CP extends CommandProcessor<any, any>[],
  M extends CommandProcessorMessageType<CP[number]>,
  C extends Readonly<{ message: M }>
>(
  context: C,
  commandProcessor: CP[number]
): Observable<C & Readonly<{ command: CommandProcessorCommandType<CP[number]> }>> {
  return commandProcessor(context.message).pipe(
    map(command => ({
      ...context,
      command
    }))
  );
}
