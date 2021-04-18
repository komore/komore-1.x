import type { Message, MutatedMessageOutputType } from '@komore/message';
import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

/**
 * Sets a message's output
 * @param output Message output
 * @returns Operator function that sets a message's output
 * @template MessageType Message type
 * @template NewMessageOutputType New message output type
 */
export function mapOutputTo<
  MessageType extends Message<string, Record<symbol, unknown>, unknown, unknown>,
  NewMessageOutputType
>(
  output: NewMessageOutputType
): OperatorFunction<MessageType, MutatedMessageOutputType<MessageType, NewMessageOutputType>> {
  return map(message => ({
    ...message,
    output
  } as unknown as MutatedMessageOutputType<MessageType, NewMessageOutputType>));
}
