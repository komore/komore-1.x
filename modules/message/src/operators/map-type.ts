import { map } from 'rxjs/operators';
import { Message, MutatedMessageTypeName } from '../message';

/**
 * Operator function that maps a message to a message with a new type
 * @param project Mapping function
 * @template MessageType Message type
 * @template MessageTypeName Message type name
 */
export function mapType<MessageType extends Message<any, any, any, any>, MessageTypeName extends string>(
  project: (message: MessageType) => MessageTypeName
) {
  return map(
    (message: MessageType): MutatedMessageTypeName<MessageType, MessageTypeName> => ({
      ...message,
      type: project(message)
    })
  );
}
