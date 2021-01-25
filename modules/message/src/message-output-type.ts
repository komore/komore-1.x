import type { Message } from './message';

/**
 * Message output type
 * @template MessageType Message type
 */
export type MessageOutputType<MessageType extends Message<any, any, any, any>> = MessageType extends Message<
  any,
  any,
  any,
  infer MessageOutputType
>
  ? MessageOutputType
  : never;
