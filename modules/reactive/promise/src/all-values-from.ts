import type { Observable } from '@komore/reactive';
import { toArray } from 'rxjs/operators';
import { lastValueFrom } from './last-value-from';

/**
 * Converts an observable to a promise that resolves to all the values emitted by the observable before it completed
 * @param source Source observable
 * @returns Promise that resolves to all values emitted by the observable before completion
 */
export function allValuesFrom<T>(source: Observable<T>): Promise<ReadonlyArray<T>> {
  return lastValueFrom(source.pipe(toArray()));
}
