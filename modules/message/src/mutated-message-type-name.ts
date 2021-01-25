import type { Message } from './message';
import type { MessageInputType } from './message-input-type';
import type { MessageMetadataType } from './message-metadata-type';
import type { MessageOutputType } from './message-output-type';

/**
 * Mutated message type name
 * @template MessageType Message type
 * @template NewMessageTypeName New message type name
 */
export type MutatedMessageTypeName<
  MessageType extends Message<any, any, any, any>,
  NewMessageTypeName extends string
> = Message<
  NewMessageTypeName,
  MessageMetadataType<MessageType>,
  MessageInputType<MessageType>,
  MessageOutputType<MessageType>
>;
