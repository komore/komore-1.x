import type { Message } from './message';
import type { MessageMetadataType } from './message-metadata-type';
import type { MessageOutputType } from './message-output-type';
import type { MessageTypeName } from './message-type-name';

/**
 * Mutated message input type
 * @template MessageType Message type
 * @template NewMessageInputType New message input type
 */
export type MutatedMessageInputType<MessageType extends Message<any, any, any, any>, NewMessageInputType> = Message<
  MessageTypeName<MessageType>,
  MessageMetadataType<MessageType>,
  NewMessageInputType,
  MessageOutputType<MessageType>
>;
