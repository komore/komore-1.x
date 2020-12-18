import { map } from 'rxjs/operators';
import { Message } from '../message';

/**
 * Operator function that sets a message's type
 * @param type Message type
 * @template MessageTypeName Message type name
 * @template MessageType Message type
 */
export function mapTypeTo<MessageTypeName extends string>(type: MessageTypeName) {
  return map(<MessageType extends Message<any, any, any, any>>(message: MessageType) => ({
    ...message,
    type
  }));
}
