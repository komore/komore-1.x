import type { OperatorFunction } from '@komore/reactive';
import { map } from './map';

/**
 * Redacts emitted values, keeping the emission itself but preventing the observer from accessing the value itself
 * @template InputType Input type
 */
export function redactValue<InputType>(): OperatorFunction<InputType, void> {
  return map(() => void 0);
}
