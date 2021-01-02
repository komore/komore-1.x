import { EMPTY, MonoTypeOperatorFunction, Observable } from 'rxjs';

export function redirectTo(path: string): MonoTypeOperatorFunction<Location> {
  return EMPTY;
}
