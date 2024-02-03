import { type OperatorFunction } from '../operator-function';
import { mergeMapTo } from './merge-map-to';

/**
 * Prevents the stream from ever emitting a value or completing
 *
 * @returns Operator function that drops any value and never allows completion
 */
export function neverComplete(): OperatorFunction<unknown, never> {
  return mergeMapTo(new Observable<never>());
}
