import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

/**
 * Maps to a message event's data
 * @returns Operator function that maps a message event to its data
 * @template T Message data type
 */
export function mapToMessageEventData<T>(): OperatorFunction<MessageEvent<T>, T> {
  return map(message => message.data);
}
