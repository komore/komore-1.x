import { type TruthyTypesOf } from '@komore/typescript';
import { filter as rxjsFilter } from 'rxjs';
import { type OperatorFunction } from '../operator-function';

/**
 * Filters truthy values emitted by the source observable
 * @template T Value type
 */
export function filterTruthy<T>(): OperatorFunction<T, TruthyTypesOf<T>> {
  return rxjsFilter(Boolean);
}
