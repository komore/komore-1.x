import type { OperatorFunction } from '@komore/reactive';
import { NEVER } from '@komore/reactive';
import { mergeMapTo } from './merge-map-to';

export function neverComplete(): OperatorFunction<unknown, never> {
  return mergeMapTo(NEVER);
}
