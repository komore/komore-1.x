import { map } from 'rxjs/operators';
import { Message, MutatedMessageMetadataType } from '../message';

/**
 * Operator function that maps a message to a message with new metadata
 * @param project Mapping function
 * @template MessageType Message type
 * @template MessageMetadataType Message metadata type
 */
export function mapMetadata<MessageType extends Message<any, any, any, any>, MessageMetadataType extends object>(
  project: (message: MessageType) => MessageMetadataType
) {
  return map(
    (message: MessageType): MutatedMessageMetadataType<MessageType, MessageMetadataType> => ({
      ...message,
      metadata: project(message)
    })
  );
}
