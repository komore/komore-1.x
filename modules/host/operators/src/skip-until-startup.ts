import type { MonoTypeOperatorFunction } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

export function skipUntilStart<T>(): MonoTypeOperatorFunction<T> {
  return skipUntil()
}
