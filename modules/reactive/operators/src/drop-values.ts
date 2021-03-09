import type { OperatorFunction } from '@komore/reactive';
import { map } from './map';

/**
 * Drops emitted values
 */
export function dropValues(): OperatorFunction<unknown, void> {
  return map(() => {
    // void function
  });
}
