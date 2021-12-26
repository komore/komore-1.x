import { map } from '@komore/reactive';
import { type Message } from '../message';
import { type MutatedMessageMetadataType } from '../mutated-message-metadata-type';

/**
 * Operator function that sets a message's metadata
 * @param type Message type
 * @template NewMessageMetadataType New message metadata type
 * @template MessageType Message type
 */
export function mapMetadataTo<NewMessageMetadataType extends object>(metadata: NewMessageMetadataType) {
  return map(
    <MessageType extends Message<any, any, any, any>>(
      message: MessageType
    ): MutatedMessageMetadataType<MessageType, NewMessageMetadataType> => ({
      ...message,
      metadata
    })
  );
}

// TODO: no longer needed if mapTo / map / etc. support objects