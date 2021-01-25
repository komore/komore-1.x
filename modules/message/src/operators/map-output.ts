import { map } from 'rxjs/operators';
import type { Message } from '../message';
import type { MutatedMessageOutputType } from '../mutated-message-output-type';

/**
 * Operator function that maps to a message with a new output
 * @param project Mapping function
 * @template MessageType Message type
 * @template NewMessageOutputType New message output type
 */
export function mapOutput<MessageType extends Message<any, any, any, any>, NewMessageOutputType>(
  project: (message: MessageType) => NewMessageOutputType
) {
  return map(
    (message: MessageType): MutatedMessageOutputType<MessageType, NewMessageOutputType> => ({
      ...message,
      output: project(message)
    })
  );
}
