import type { Message } from './message';
import type { MessageInputType } from './message-input-type';
import type { MessageOutputType } from './message-output-type';
import type { MessageTypeName } from './message-type-name';

/**
 * Mutated message metadata type
 * @template MessageType Message type
 * @template NewMessageMetadataType New message metadata type
 */
export type MutatedMessageMetadataType<
  MessageType extends Message<any, any, any, any>,
  NewMessageMetadataType extends Record<symbol, any>
> = Message<
  MessageTypeName<MessageType>,
  NewMessageMetadataType,
  MessageInputType<MessageType>,
  MessageOutputType<MessageType>
>;
