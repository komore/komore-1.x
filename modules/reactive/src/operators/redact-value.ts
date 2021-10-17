import type { OperatorFunction } from '../operator/operator-function';
import { mapTo } from './map-to';

/**
 * Redacts emitted values, keeping the emission itself but preventing the observer from accessing the value itself
 * @template InputType Input type
 */
export function redactValue<InputType>(): OperatorFunction<InputType, void> {
  return mapTo(void 0);
}
