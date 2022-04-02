import { map, type OperatorFunction } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformVariableConfig } from 'cdktf';
import { type GenericScope } from '../scope/generic-scope';
import { type ScopeWithAddedVariable } from '../scope/scope-with-added-variable';
import { type ScopedConfiguration } from '../scope/scoped-configuration';
import { type StackTypeNames } from '../type/stack-type-names';

export function variables<
  ScopeType extends GenericScope,
  VariableDefinitions extends ReadonlyRecord<
    string,
    ScopedConfiguration<ScopeType, TerraformVariableConfig & { readonly type: keyof StackTypeNames }>
  >
>(_variableDefinitions: VariableDefinitions): OperatorFunction<ScopeType, ScopeWithAddedVariable<ScopeType, VariableId, StackTypeNames[VariableTypeName]>> {
  // TODO
  return map(scope => {
      return scope;
  });
}

