import type { OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import type { GenericScope, ScopeWithAddedVariable, TypedVariable, Types } from '@komore/stack';
import { TerraformVariable } from 'cdktf';
import type { VariableProperties } from './variable-properties';

/**
 * Adds a boolean variable to a scope
 * @param name Variable name
 * @param type Variable type
 * @param properties Variable properties
 * @template ScopeType Scope type
 * @template VariableName Variable name
 * @returns Operator function that adds a boolean variable to a scope
 */
export function withVariable<ScopeType extends GenericScope, VariableName extends string>(
  name: VariableName,
  type: typeof Boolean,
  properties?: VariableProperties<'boolean'>
): OperatorFunction<ScopeType, ScopeWithAddedVariable<ScopeType, VariableName, 'boolean'>>;

/**
 * Adds a number variable to a scope
 * @param name Variable name
 * @param type Variable type
 * @param properties Variable properties
 * @template ScopeType Scope type
 * @template VariableName Variable name
 * @returns Operator function that adds a number variable to a scope
 */
export function withVariable<ScopeType extends GenericScope, VariableName extends string>(
  name: VariableName,
  type: typeof Number,
  properties?: VariableProperties<'number'>
): OperatorFunction<ScopeType, ScopeWithAddedVariable<ScopeType, VariableName, 'number'>>;

/**
 * Adds a string variable to a scope
 * @param name Variable name
 * @param type Variable type
 * @param properties Variable properties
 * @template ScopeType Scope type
 * @template VariableName Variable name
 * @returns Operator function that adds a string variable to a scope
 */
export function withVariable<ScopeType extends GenericScope, VariableName extends string>(
  name: VariableName,
  type: typeof String,
  properties?: VariableProperties<'string'>
): OperatorFunction<ScopeType, ScopeWithAddedVariable<ScopeType, VariableName, 'string'>>;

/**
 * Adds a variable to a scope
 * @param name Variable name
 * @param type Variable type
 * @param properties Variable properties
 * @returns Operator function that adds a variable to a scope
 */
export function withVariable<ScopeType extends GenericScope, VariableName extends string, VariableTypeName extends keyof Types>(
  name: VariableName,
  type: typeof Boolean | typeof Number | typeof String,
  properties?: VariableProperties<VariableTypeName>
): OperatorFunction<ScopeType, ScopeWithAddedVariable<ScopeType, VariableName, VariableTypeName>> {
  const defaultValue = properties?.default;
  const description = properties?.description;
  const sensitive = properties?.sensitive;

  return map(scope => {
    const typeName: VariableTypeName = (type === String
      ? 'string' : type === Number ? 'number' : 'boolean') as VariableTypeName;
    const terraformVariable = new TerraformVariable(scope.construct, name, {
      default: defaultValue,
      description,
      // TODO: sensitive,
      type: typeName
    });

    const variable: TypedVariable<VariableTypeName> = {
      name,
      default: defaultValue,
      description,
      sensitive,
      terraformVariable,
      type: typeName
    };

    return {
      ...scope,
      variables: {
        ...scope.variables,
        [name]: variable
      }
    } as ScopeWithAddedVariable<ScopeType, VariableName, VariableTypeName>;
  });
}
