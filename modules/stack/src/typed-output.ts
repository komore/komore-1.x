import type { Types } from './types';
import type { TerraformOutput } from 'cdktf';
import type { TypedValue } from './typed-value';

/**
 * Typed output
 * @template TypeName Type name
 */
export interface TypedOutput<TypeName extends keyof Types> {
  readonly terraformOutput: TerraformOutput;
  readonly type: TypeName;
  readonly value: TypedValue<TypeName>;
}
