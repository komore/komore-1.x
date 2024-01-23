import { from as rxjsFrom } from 'rxjs';

import { type IterableValueType } from '@komore/typescript';

import { type Observable } from '../observable';

/**
 * Creates an observable that emits all values from an iterable then completes
 *
 * @param iterable Iterable
 * @returns Observable that emits all values from the iterable then completes
 * @template IterableType Iterable type
 */
export function fromIterable<IterableType extends Iterable<unknown> | AsyncIterable<unknown>>(
  input: IterableType
): Observable<IterableValueType<IterableType>> {
  // NOTE: ObservedValueOf<ArrayType> is not IterableValueType<ArrayType>
  return rxjsFrom(input) as unknown as Observable<IterableValueType<IterableType>>;
}
