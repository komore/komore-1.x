import { type TerraformOutput } from 'cdktf';
import { type StackType } from './stack-type';
import { type StackTypeNames } from './stack-type-names';

/**
 * Typed output
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TypedOutput<_VariableType extends StackType> extends TerraformOutput {}

/**
 * Creates a typed Output
 * @param output Output
 * @returns Typed variable
 */
export function typedOutput<VariableTypeName extends keyof StackTypeNames>(
  output: TerraformOutput
): TypedOutput<StackTypeNames[VariableTypeName]> {
  return output as TypedOutput<StackTypeNames[VariableTypeName]>;
}
