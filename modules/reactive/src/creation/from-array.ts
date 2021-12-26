import { type ArrayValueType } from '@komore/array';
import { from as rxjsFrom } from 'rxjs';
import { type Observable } from '../observable';

/**
 * Creates an observable that emits all values from an array then completes
 * @param array Array
 * @returns Observable that emits all values from an array then completes
 * @template ArrayType Array type
 */
export function fromArray<ArrayType extends ArrayLike<unknown>>(array: ArrayType): Observable<ArrayValueType<ArrayType>> {
  return rxjsFrom(array) as unknown as Observable<ArrayValueType<ArrayType>>;
}
