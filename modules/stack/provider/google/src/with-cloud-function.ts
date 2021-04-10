import type { MonoTypeOperatorFunction } from '@komore/reactive';
import type { GenericScope } from '@komore/stack';
import { addToConstruct } from '@komore/stack/provider';
import type { CloudfunctionsFunctionConfig } from './.gen/cloudfunctions-function';
import { CloudfunctionsFunction } from './.gen/cloudfunctions-function';

export function withCloudFunction<ScopeType extends GenericScope>(
  id: string,
  config: CloudfunctionsFunctionConfig
): MonoTypeOperatorFunction<ScopeType> {
  return addToConstruct(CloudfunctionsFunction, id, config);
}
