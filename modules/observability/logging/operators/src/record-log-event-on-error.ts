import type { MonoTypeOperatorFunction } from 'rxjs';
import { tap } from 'rxjs/operators';

export function recordLogEventOnError<T>(): MonoTypeOperatorFunction<T> {
  return tap({
    error(error: unknown) {
      
    }
  });
}
