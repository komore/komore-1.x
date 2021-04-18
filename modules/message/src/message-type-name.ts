import type { Message } from './message';

/**
 * Message type name
 * @template MessageType Message type
 */
export type MessageTypeName<MessageType> = MessageType extends Message<
  infer MessageTypeName,
  Record<symbol, unknown>,
  unknown,
  unknown
>
  ? MessageTypeName
  : never;
