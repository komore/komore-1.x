import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

export function withAmazonProvider<ScopeType extends GenericScope>(): OperatorFunction<ScopeType, unknown> {
  return map()
}
