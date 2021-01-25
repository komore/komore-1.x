import type { Message } from './message';

/**
 * Message type name
 * @template MessageType Message type
 */
export type MessageTypeName<MessageType extends Message<any, any, any, any>> = MessageType extends Message<
  infer MessageTypeName,
  any,
  any,
  any
>
  ? MessageTypeName
  : never;
