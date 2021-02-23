import type { Observable } from '@komore/reactive';
import { firstValueFrom as rxjsFirstValueFrom } from 'rxjs';

/**
 * Converts an observable to a promise by resolving the promise as soon as a value is emitted by the observable
 * @param source Source observable
 * @returns Promise that resolves to the first value emitted by the observable
 */
export function firstValueFrom<T>(source: Observable<T>): Promise<T> {
  return rxjsFirstValueFrom(source);
}
