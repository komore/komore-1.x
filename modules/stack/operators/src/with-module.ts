import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import { TerraformModule } from 'cdktf';

export function withModule<ScopeType extends Scope<unknown>>(): OperatorFunction<ScopeType, any> {
  return map(scope => ({
    ...scope,
    modules: {
      ...scope.modules,

    }
  }));
}