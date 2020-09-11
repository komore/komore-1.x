/**
 * Message
 * @template T Message type
 * @template P Parameters type
 */
export type Message<T extends string, P extends object> = Readonly<{
  type: T;
  parameters: P;
}>;
