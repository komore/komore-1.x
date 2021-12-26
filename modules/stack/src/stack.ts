import { type TerraformStack } from 'cdktf';
import { type Scope } from './scope';
import { type TypedVariable } from './typed-variable';
import { type Types } from './types';

/**
 * Stack
 * @template Variables Variables
 * @template Locals Locals
 * @template Outputs Outputs
 * @template Resources Resources
 * @template DataSources Data sources
 */
export interface Stack<Variables extends Record<string, TypedVariable<keyof Types>>> extends Scope<Variables> {
  readonly stack: TerraformStack;
}
