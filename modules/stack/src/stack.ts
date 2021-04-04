import { Scope } from './scope';
import type { TypedVariable } from './typed-variable';
import type { Types } from './types';

/**
 * Stack
 * @template Variables Variables type
 */
export interface Stack<Variables extends Record<string, TypedVariable<keyof Types>>> extends Scope<Variables> {

}
