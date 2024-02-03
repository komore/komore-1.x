import { empty, type MonoTypeOperatorFunction } from '@komore/reactive';

export function redirectTo(path: string): MonoTypeOperatorFunction<Location> {
  return empty;
}
