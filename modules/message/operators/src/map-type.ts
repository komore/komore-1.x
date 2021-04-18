import type { Message, MutatedMessageTypeName } from '@komore/message';
import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

/**
 * Operator function that maps a message to a message with a new type
 * @param project Mapping function
 * @template MessageType Message type
 * @template NewMessageTypeName Message type name
 */
export function mapType<
  MessageType extends Message<string, Record<symbol, unknown>, unknown, unknown>,
  NewMessageTypeName extends string
>(
  project: (message: MessageType) => NewMessageTypeName
): OperatorFunction<MessageType, MutatedMessageTypeName<MessageType, NewMessageTypeName>> {
  return map(
    message =>
      (({
        ...message,
        type: project(message)
      } as unknown) as MutatedMessageTypeName<MessageType, NewMessageTypeName>)
  );
}
