import { map } from '@komore/reactive';
import { type Message } from '../message';
import { type MutatedMessageInputType } from '../mutated-message-input-type';

/**
 * Operator function that maps a message to a message with a new input
 * @param project Projection function
 * @template MessageType Message type
 * @template NewMessageInputType New message input type
 */
export function mapInput<MessageType extends Message<string, any, any, any>, NewMessageInputType>(
  project: (message: MessageType) => NewMessageInputType
) {
  return map(
    (message: MessageType): MutatedMessageInputType<MessageType, NewMessageInputType> => ({
      ...message,
      input: project(message)
    })
  );
}
