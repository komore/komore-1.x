import { type Expand } from '@komore/typescript';
import { type TerraformVariableConfig } from 'cdktf';
import { type StackTypeNames } from './stack-type-names';

/**
 * Typed Terraform variable configuration
 *
 * @template VariableType Variable type
 */
export type TypedTerraformVariableConfig<VariableType extends keyof StackTypeNames> = Expand<
  Omit<TerraformVariableConfig, 'type'> & { readonly type: VariableType }
>;
