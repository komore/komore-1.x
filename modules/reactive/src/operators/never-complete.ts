import { NEVER } from '../creation/never';
import { type OperatorFunction } from '../operator-function';
import { mergeMapTo } from './merge-map-to';

export function neverComplete(): OperatorFunction<unknown, never> {
  return mergeMapTo(NEVER);
}
