import type { Observable } from '@komore/reactive';
import { lastValueFrom as rxjsLastValueFrom } from 'rxjs';

/**
 * Converts an observable to a promise by waiting for it to complete and resolving the last value it emitted
 * @param source Source observable
 * @returns Promise that resolves to the last value emitted by the observable before completion
 */
export function lastValueFrom<T>(source: Observable<T>): Promise<T> {
  return rxjsLastValueFrom(source);
}
