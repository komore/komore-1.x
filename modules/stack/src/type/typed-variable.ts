import { type TerraformVariable } from 'cdktf';
import { type StackType } from './stack-type';
import { type StackTypeNames } from './stack-type-names';

/**
 * Typed variable
 */
export interface TypedVariable<VariableType extends StackType> extends TerraformVariable {
  get value(): VariableType;
}

/**
 * Creates a typed variable
 * @param variable Variable
 * @returns Typed variable
 */
export function typedVariable<VariableTypeName extends keyof StackTypeNames>(
  variable: TerraformVariable
): TypedVariable<StackTypeNames[VariableTypeName]> {
  return variable as TypedVariable<StackTypeNames[VariableTypeName]>;
}
