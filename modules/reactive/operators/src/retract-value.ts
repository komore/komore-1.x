import type { OperatorFunction } from '@komore/reactive';
import { mapTo } from './map-to';

/**
 * Retracts emitted values, keeping the emission itself but preventing the subscribing from accessing the value itself
 * @template InputType Input type
 */
export function retractValue<InputType>(): OperatorFunction<InputType, void> {
  return mapTo(void 0);
}
