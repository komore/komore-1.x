import type { TerraformVariable } from 'cdktf';
import type { Types } from './types';

/**
 * Typed variable
 */
export interface TypedVariable<K extends keyof Types> {
  readonly name: string;
  readonly description?: string;
  readonly default?: Types[K];
  // TODO: https://github.com/hashicorp/terraform-cdk/issues/569
  readonly sensitive?: boolean;
  readonly terraformVariable: TerraformVariable;
  readonly type: K;
}
