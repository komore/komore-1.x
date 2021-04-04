import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import type { GenericScope, TypedVariable, Types } from '@komore/stack';
import { TerraformVariable } from 'cdktf';
import type { VariableProperties } from './variable-properties';

/**
 * Adds a variable to a scope
 * @param name Variable name
 * @param type Variable type
 * @param properties Variable properties
 * @returns Operator funciton that adds a variable to a scope
 */
export function withVariable<ScopeType extends GenericScope, K extends keyof Types>(
  name: string,
  type: K,
  properties?: VariableProperties<K>
): OperatorFunction<ScopeType, ScopeType> {
  const defaultValue = properties?.default;
  const description = properties?.description;
  const sensitive = properties?.sensitive;

  return map(scope => {
    const terraformVariable = new TerraformVariable(scope.construct, name, {
      default: defaultValue,
      description,
      // TODO: sensitive,
      type
    });

    const variable: TypedVariable<K> = {
      name,
      default: defaultValue,
      description,
      sensitive,
      terraformVariable,
      type
    };

    return {
      ...scope,
      variables: {
        ...scope.variables,
        [name]: variable
      }
    };
  });
}
