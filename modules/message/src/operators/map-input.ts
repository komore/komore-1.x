import { map } from 'rxjs/operators';
import { Message, MutatedMessageInputType } from '../message';

/**
 * Operator function that maps a message to a message with a new input
 * @param project Mapping function
 * @template MessageType Message type
 * @template MessageInputType Message input type
 */
export function mapInput<MessageType extends Message<any, any, any, any>, MessageInputType>(
  project: (message: MessageType) => MessageInputType
) {
  return map(
    (message: MessageType): MutatedMessageInputType<MessageType, MessageInputType> => ({
      ...message,
      input: project(message)
    })
  );
}
