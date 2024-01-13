import { type Message, type MutatedMessageInputType } from '@komore/message';
import { map, type OperatorFunction } from '@komore/reactive';

/**
 * Sets a message's input
 * @param input Message input
 * @returns Operator function that sets a message's input
 * @template MessageType Message type
 * @template NewMessageInputType New message input type
 */
export function mapInputTo<
  MessageType extends Message<string, Record<symbol, unknown>, unknown, unknown>,
  NewMessageInputType
>(
  input: NewMessageInputType
): OperatorFunction<MessageType, MutatedMessageInputType<MessageType, NewMessageInputType>> {
  return map(message => ({
    ...message,
    input
  } as unknown as MutatedMessageInputType<MessageType, NewMessageInputType>));
}
