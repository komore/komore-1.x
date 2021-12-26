import { type Observable } from '../observable';
import { toArray } from '../operators/to-array';
import { firstValueFrom } from './first-value-from';

/**
 * Converts an observable to a promise that resolves to all the values emitted by the observable before it completed
 * @param source Source observable
 * @returns Promise that resolves to all values emitted by the observable before completion
 */
export function allValuesFrom<T>(source: Observable<T>): Promise<ReadonlyArray<T>> {
  return firstValueFrom(source.pipe(toArray()));
}
