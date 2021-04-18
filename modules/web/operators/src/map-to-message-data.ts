import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

/**
 * Maps to a message's data
 * @returns Operator function that maps a message to its data
 * @template T Message data type
 */
export function mapToMessageData<T>(): OperatorFunction<MessageEvent<T>, T> {
  return map(message => message.data);
}
