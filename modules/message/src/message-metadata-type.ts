import type { Message } from './message';

/**
 * Message metadata type
 * @template MessageType Message type
 */
export type MessageMetadataType<MessageType extends Message<any, any, any, any>> = MessageType extends Message<any, infer MessageMetadataType, any, any>
  ? MessageMetadataType
  : never;
