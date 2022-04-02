import { map, type OperatorFunction } from '@komore/reactive';
import { TerraformOutput, type TerraformOutputConfig } from 'cdktf';
import { type GenericScope } from '../scope/generic-scope';
import { type ScopedConfiguration } from '../scope/scoped-configuration';
import { type ScopeWithAddedOutput } from '../scope/scope-with-added-output';
import { type TypedOutput } from '../type/typed-output';
import { type StackTypeNames } from '../type/stack-type-names';
import { resolveConfig } from './resolve-config';

/**
 * Adds an output
 *
 * @param outputId Output identifier
 * @param config Configuration or function that returns the configuration
 * @returns Operator function that adds an output to a scope
 * @template ScopeType Scope type
 * @template OutputTypeName Output type name
 * @template OutputId Output identifier
 */
export function output<
  ScopeType extends GenericScope,
  OutputTypeName extends keyof StackTypeNames,
  OutputId extends string
>(
  outputId: OutputId,
  config: ScopedConfiguration<ScopeType, TerraformOutputConfig & { readonly type: OutputTypeName }>
): OperatorFunction<ScopeType, ScopeWithAddedOutput<ScopeType, OutputId, StackTypeNames[OutputTypeName]>> {
  return map(scope => {
    const outputConfig = resolveConfig(scope, config);
    const output = new TerraformOutput(scope.construct, outputId, outputConfig) as unknown as TypedOutput<
      StackTypeNames[OutputTypeName]
    >;
    return {
      ...scope,
      outputs: {
        ...scope.variables,
        [outputId]: output.value,
      },
    } as unknown as ScopeWithAddedOutput<ScopeType, OutputId, StackTypeNames[OutputTypeName]>;
  });
}
