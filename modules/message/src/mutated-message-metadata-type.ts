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
  MessageType extends Message<string, Record<symbol, unknown>, unknown, unknown>,
  NewMessageMetadataType extends Record<symbol, unknown>
> = Message<
  MessageTypeName<MessageType>,
  NewMessageMetadataType,
  MessageInputType<MessageType>,
  MessageOutputType<MessageType>
>;
