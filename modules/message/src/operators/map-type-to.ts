import { map } from 'rxjs/operators';
import type { Message } from '../message';
import type { MutatedMessageTypeName } from '../mutated-message-type-name';

/**
 * Operator function that sets a message's type
 * @param type Message type
 * @template NewMessageTypeName Message type name
 * @template MessageType Message type
 */
export function mapTypeTo<NewMessageTypeName extends string>(type: NewMessageTypeName) {
  return map(
    <MessageType extends Message<any, any, any, any>>(
      message: MessageType
    ): MutatedMessageTypeName<MessageType, NewMessageTypeName> => ({
      ...message,
      type
    })
  );
}
