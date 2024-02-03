import { EmptyError } from '../creation/empty-error';

/**
 * Converts an observable to a promise by waiting for it to complete and resolving the last value it emitted
 *
 * @param source Source observable
 * @returns Promise that resolves to the last value emitted by the observable before completion
 */
export function lastValueFrom<T>(source: Observable<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    let emittedValue: T | undefined;
    let valueEmitted = false;

    source.subscribe({
      next(value) {
        emittedValue = value;
        valueEmitted = true;
      },
      error(error) {
        reject(error);
      },
      complete() {
        if (valueEmitted) {
          resolve(emittedValue as T);
        } else {
          reject(new EmptyError());
        }
      },
    });
  });
}
