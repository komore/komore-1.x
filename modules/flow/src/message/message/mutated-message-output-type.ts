import { type Message } from './message';
import { type MessageInputType } from './message-input-type';
import { type MessageMetadataType } from './message-metadata-type';
import { type MessageTypeName } from './message-type-name';

/**
 * Mutated message output type
 * @template MessageType Message type
 * @template NewMessageOutputType New message output type
 */
export type MutatedMessageOutputType<
  MessageType extends Message<string, Record<symbol, unknown>, unknown, unknown>,
  NewMessageOutputType
> = Message<
  MessageTypeName<MessageType>,
  MessageMetadataType<MessageType>,
  MessageInputType<MessageType>,
  NewMessageOutputType
>;
