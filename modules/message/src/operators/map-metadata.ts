import { map } from 'rxjs/operators';
import type { Message } from '../message';
import type { MutatedMessageMetadataType } from '../mutated-message-metadata-type';

/**
 * Operator function that maps a message to a message with new metadata
 * @param project Mapping function
 * @template MessageType Message type
 * @template NewMessageMetadataType New message metadata type
 */
export function mapMetadata<MessageType extends Message<any, any, any, any>, NewMessageMetadataType extends object>(
  project: (message: MessageType) => NewMessageMetadataType
) {
  return map(
    (message: MessageType): MutatedMessageMetadataType<MessageType, NewMessageMetadataType> => ({
      ...message,
      metadata: project(message)
    })
  );
}
