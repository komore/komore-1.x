import { identity } from '@komore/functional';
import { type MonoTypeOperatorFunction } from '../mono-type-operator-function';
import { map } from './map';

export function cacheUntil<T>(): MonoTypeOperatorFunction<T> {
  // TODO
  return map(identity);
}
