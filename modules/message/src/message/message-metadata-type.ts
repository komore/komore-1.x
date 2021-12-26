import { type Message } from './message';

/**
 * Message metadata type
 * @template MessageType Message type
 */
export type MessageMetadataType<MessageType> = MessageType extends Message<
  string,
  infer MessageMetadataType,
  unknown,
  unknown
>
  ? MessageMetadataType
  : never;
