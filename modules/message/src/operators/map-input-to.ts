import { map } from 'rxjs/operators';
import type { Message } from '../message';
import type { MutatedMessageInputType } from '../mutated-message-input-type';

/**
 * Operator function that sets a message's input
 * @param input Message input
 * @template NewMessageInputType New message input type
 * @template MessageType Message type
 */
export function mapInputTo<NewMessageInputType>(input: NewMessageInputType) {
  return map(
    <MessageType extends Message<any, any, any, any>>(
      message: MessageType
    ): MutatedMessageInputType<MessageType, NewMessageInputType> => ({
      ...message,
      input
    })
  );
}
