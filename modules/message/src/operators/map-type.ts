import { map } from 'rxjs/operators';
import type { Message } from '../message';
import type { MutatedMessageTypeName } from '../mutated-message-type-name';

/**
 * Operator function that maps a message to a message with a new type
 * @param project Mapping function
 * @template MessageType Message type
 * @template NewMessageTypeName Message type name
 */
export function mapType<MessageType extends Message<any, any, any, any>, NewMessageTypeName extends string>(
  project: (message: MessageType) => NewMessageTypeName
) {
  return map(
    (message: MessageType): MutatedMessageTypeName<MessageType, NewMessageTypeName> => ({
      ...message,
      type: project(message)
    })
  );
}
