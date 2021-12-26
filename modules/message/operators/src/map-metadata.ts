import { type Message, type MutatedMessageMetadataType } from '@komore/message';
import { map, type OperatorFunction } from '@komore/reactive';

/**
 * Maps a message to a message with new metadata
 * @param project Mapping function
 * @returns Operator function that maps a message to a message with new metadata
 * @template MessageType Message type
 * @template NewMessageMetadataType New message metadata type
 */
export function mapMetadata<
  MessageType extends Message<string, Record<symbol, unknown>, unknown, unknown>,
  NewMessageMetadataType extends Record<symbol, unknown>
>(
  project: (message: MessageType) => NewMessageMetadataType
): OperatorFunction<MessageType, MutatedMessageMetadataType<MessageType, NewMessageMetadataType>> {
  return map(
    (message: MessageType): MutatedMessageMetadataType<MessageType, NewMessageMetadataType> => ({
      ...message,
      metadata: project(message)
    } as unknown as MutatedMessageMetadataType<MessageType, NewMessageMetadataType>)
  );
}
