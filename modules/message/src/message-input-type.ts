import type { Message } from './message';

/**
 * Message input type
 * @template MessageType Message type
 */
export type MessageInputType<MessageType extends Message<any, any, any, any>> = MessageType extends Message<
  any,
  any,
  infer MessageInputType,
  any
>
  ? MessageInputType
  : never;
