import { ignoreElements } from 'rxjs';

import { type OperatorFunction } from '../operator-function';

/**
 * Ignores any emitted value from the source observable, but forwards errors and completion
 */
export function ignoreValues(): OperatorFunction<unknown, never> {
  return ignoreElements();
}
