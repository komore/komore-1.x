import type { OperatorFunction } from '@komore/reactive';
import { ignoreElements as rxjsIgnoreElements } from 'rxjs/operators';

/**
 * Ignores any emitted value from the source observable, but forwards errors and completion
 */
export function ignoreElements(): OperatorFunction<unknown, never> {
  return rxjsIgnoreElements();
}
