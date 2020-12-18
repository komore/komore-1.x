import { map } from 'rxjs/operators';
import { Message, MutatedMessageOutputType } from '../message';

/**
 * Operator function that maps to a message with a new output
 * @param project Mapping function
 * @template MessageType Message type
 * @template MessageOutputType Message output type
 */
export function mapOutput<MessageType extends Message<any, any, any, any>, MessageOutputType>(
  project: (message: MessageType) => MessageOutputType
) {
  return map(
    (message: MessageType): MutatedMessageOutputType<MessageType, MessageOutputType> => ({
      ...message,
      output: project(message)
    })
  );
}
