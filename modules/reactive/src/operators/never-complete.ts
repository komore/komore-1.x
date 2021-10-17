import { NEVER } from '../creation/never';
import type { OperatorFunction } from '../operator/operator-function';
import { switchMapTo } from './switch-map-to';

export function neverComplete(): OperatorFunction<unknown, never> {
  return switchMapTo(NEVER);
}
