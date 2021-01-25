import { map } from 'rxjs/operators';
import { Message } from '../message';
import { MutatedMessageOutputType } from '../mutated-message-output-type';

/**
 * Operator function that sets a message's output
 * @param output Message output
 * @template NewMessageOutputType New message output type
 * @template MessageType Message type
 */
export function mapOutputTo<NewMessageOutputType>(output: NewMessageOutputType) {
  return map(
    <MessageType extends Message<any, any, any, any>>(
      message: MessageType
    ): MutatedMessageOutputType<MessageType, NewMessageOutputType> => ({
      ...message,
      output
    })
  );
}
