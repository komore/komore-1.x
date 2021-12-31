import { map, type Message, type MutatedMessageOutputType } from '@komore/message';

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
