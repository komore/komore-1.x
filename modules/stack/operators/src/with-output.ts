import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import type { GenericScope, TypedOutput, TypedValue, Types } from '@komore/stack';
import { TerraformOutput } from 'cdktf';
import type { OutputProperties } from './output-properties';

/**
 * Adds an output to a scope
 * @param name Output name
 * @param value Output value
 * @param properties Output properties
 * @returns Operator function that adds an output to a scope
 */
export function withOutput<ScopeType extends GenericScope, K extends keyof Types>(
  name: string,
  value: TypedValue<K>,
  properties?: OutputProperties
): OperatorFunction<ScopeType, unknown> {
  const description = properties?.description;
  const sensitive = properties?.sensitive;

  return map(scope => {
    const terraformOutput = new TerraformOutput(scope.construct, name, {
      description,
      sensitive,
      value: value.value
    });

    const output: TypedOutput<K> = {
      description,
      name,
      sensitive,
      type: value.type,
      terraformOutput,
      value
    };

    return {
      ...scope,
      outputs: {
        ...scope.outputs,
        [name]: output
      }
    };
  });
}
