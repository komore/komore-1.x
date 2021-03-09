import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { constraint } from './constraint';

export function maximum(maximum: number): MonoTypeOperatorFunction<number> {
  return constraint(value => value <= maximum, 'numeric.maximum', { maximum });
}
