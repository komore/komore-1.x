import type { OperatorFunction } from '@komore/reactive';

/**
 * Command
 * @template RequestType Request type
 * @template ResponseType Response type
 */
export type Command<RequestType, ResponseType> = OperatorFunction<RequestType, ResponseType>;
