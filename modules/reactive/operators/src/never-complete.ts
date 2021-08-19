import type { OperatorFunction } from '@komore/reactive';
import { NEVER } from '@komore/reactive';
import { switchMapTo } from './switch-map-to';

export function neverComplete(): OperatorFunction<unknown, never> {
  return switchMapTo(NEVER);
}
