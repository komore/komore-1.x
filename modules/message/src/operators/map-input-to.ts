import { map } from 'rxjs/operators';
import { Message } from '../message';

/**
 * Operator function that sets a message's input
 * @param input Message input
 * @template MessageInputType Message input type
 * @template MessageType Message type
 */
export function mapInputTo<MessageInputType>(input: MessageInputType) {
  return map(<MessageType extends Message<any, any, any, any>>(message: MessageType) => ({
    ...message,
    input
  }));
}
