import { type TerraformLocal } from 'cdktf';
import { type StackType } from './stack-type';
import { type StackTypeNames } from './stack-type-names';

/**
 * Typed local
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TypedLocal<_VariableType extends StackType> extends TerraformLocal {}

/**
 * Creates a typed local
 * @param local Local
 * @returns Typed local
 */
export function typedLocal<VariableTypeName extends keyof StackTypeNames>(
  local: TerraformLocal
): TypedLocal<StackTypeNames[VariableTypeName]> {
  return local as TypedLocal<StackTypeNames[VariableTypeName]>;
}
