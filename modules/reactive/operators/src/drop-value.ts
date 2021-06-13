import type { OperatorFunction } from '@komore/reactive';
import { map } from './map';

/**
 * Drops emitted values
 */
export function dropValue(): OperatorFunction<unknown, void> {
  return map(() => {
    // void function
  });
}
