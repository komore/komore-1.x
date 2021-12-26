import { type Message } from './message';

/**
 * Message input type
 * @template MessageType Message type
 */
export type MessageInputType<MessageType> = MessageType extends Message<
  string,
  Record<symbol, unknown>,
  infer MessageInputType,
  unknown
>
  ? MessageInputType
  : never;
