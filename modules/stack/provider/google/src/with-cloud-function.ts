import { CloudfunctionsFunction, type CloudfunctionsFunctionConfig } from '@cdktf/provider-google';
import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { type GenericScope } from '@komore/stack';
import { addToConstruct } from '@komore/stack/provider';

export function withCloudFunction<ScopeType extends GenericScope>(
  id: string,
  config: CloudfunctionsFunctionConfig
): MonoTypeOperatorFunction<ScopeType> {
  return addToConstruct(CloudfunctionsFunction, id, config);
}
