import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import type { GenericScope } from '@komore/stack';
import { TerraformModule } from 'cdktf';

export function withModule<ScopeType extends GenericScope>(): OperatorFunction<ScopeType, any> {

  new TerraformModule()
  return map(scope => ({
    ...scope,
    modules: {
      ...scope.modules,

    }
  }));
}