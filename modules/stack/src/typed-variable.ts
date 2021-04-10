import type { TerraformVariable } from 'cdktf';
import type { Types } from './types';

/**
 * Typed variable
 */
export interface TypedVariable<VariableTypeName extends keyof Types> {
  readonly name: string;
  readonly description?: string;
  readonly default?: Types[VariableTypeName];
  // TODO: https://github.com/hashicorp/terraform-cdk/issues/569
  readonly sensitive?: boolean;
  readonly terraformVariable: TerraformVariable;
  readonly type: VariableTypeName;
}
