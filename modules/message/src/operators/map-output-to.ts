import { map } from 'rxjs/operators';
import { Message } from '../message';

/**
 * Operator function that sets a message's output
 * @param output Message output
 * @template MessageOutputType Message output type
 * @template MessageType Message type
 */
export function mapOutputTo<MessageOutputType>(output: MessageOutputType) {
  return map(<MessageType extends Message<any, any, any, any>>(message: MessageType) => ({
    ...message,
    output
  }));
}
