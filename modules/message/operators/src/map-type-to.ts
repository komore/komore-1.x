import type { Message, MutatedMessageTypeName } from '@komore/message';
import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

/**
 * Sets a message's type
 * @param type Message type
 * @returns Operator function that sets a message's type
 * @template NewMessageTypeName Message type name
 * @template MessageType Message type
 */
export function mapTypeTo<
  MessageType extends Message<string, Record<symbol, unknown>, unknown, unknown>,
  NewMessageTypeName extends string
>(type: NewMessageTypeName): OperatorFunction<MessageType, MutatedMessageTypeName<MessageType, NewMessageTypeName>> {
  return map(message => ({
    ...message,
    type
  } as unknown as MutatedMessageTypeName<MessageType, NewMessageTypeName>));
}
