import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import type { GenericScope, TypedOutput, TypedValue, Types } from '@komore/stack';
import type { TerraformOutputConfig } from 'cdktf';
import { TerraformOutput } from 'cdktf';
import type { OutputProperties } from './output-properties';
import type { ScopeWithAddedOutput } from './scope-with-added-output';

/**
 * Adds an output value to a scope
 * @param name Output name
 * @param value Output value
 * @param properties Output properties
 * @returns Operator function that adds an output to a scope
 * @template ScopeType Scope type
 * @template OutputId Output identifier
 * @template TypeName Type name
 */
export function withOutput<ScopeType extends GenericScope, OutputId extends string, TypeName extends keyof Types>(
  id: OutputId,
  value: TypedValue<TypeName>,
  properties?: OutputProperties
): OperatorFunction<ScopeType, ScopeWithAddedOutput<ScopeType, OutputId, TypedOutput<TypeName>>>;

/**
 * Adds an output to a scope
 * @param name Output name
 * @param value Output value
 * @param properties Output properties
 * @returns Operator function that adds an output to a scope
 */
export function withOutput<ScopeType extends GenericScope, OutputId extends string, K extends keyof Types>(
  id: OutputId,
  value: TypedValue<K>,
  properties?: OutputProperties
): OperatorFunction<ScopeType, ScopeWithAddedOutput<ScopeType, OutputId, TypedOutput<K>>> {
  const description = properties?.description;
  const sensitive = properties?.sensitive;
  const config: TerraformOutputConfig = {
    description,
    sensitive,
    value: value.value
  };
  const baseOutput: Omit<TypedOutput<K>, 'terraformOutput'> = {
    type: value.type,
    value
  };

  return map(scope => {
    const terraformOutput = new TerraformOutput(scope.construct, id, config);
    const output: TypedOutput<K> = {
      ...baseOutput,
      terraformOutput,
    };

    const x: ScopeWithAddedOutput<ScopeType, OutputId, TypedOutput<K>> = {
      ...scope,
      outputs: {
        ...scope.outputs,
        [id]: output
      }
    };

    return x;
  });
}
