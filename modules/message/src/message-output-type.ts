import type { Message } from './message';

/**
 * Message output type
 * @template MessageType Message type
 */
export type MessageOutputType<MessageType> = MessageType extends Message<
  string,
  Record<symbol, unknown>,
  unknown,
  infer MessageOutputType
>
  ? MessageOutputType
  : never;
