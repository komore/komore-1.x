import type { Types } from './types';
import type { TerraformOutput } from 'cdktf';
import type { TypedValue } from './typed-value';

/**
 * Typed output
 */
export interface TypedOutput<K extends keyof Types> {
  readonly description?: string;
  readonly name: string;
  readonly sensitive?: boolean;
  readonly terraformOutput: TerraformOutput;
  readonly type: K;
  readonly value: TypedValue<K>;
}
