import type { Scope } from './scope';
import type { TypedVariable } from './typed-variable';
import type { Types } from './types';

/**
 * Generic scope
 */
export type GenericScope = Scope<Record<string, TypedVariable<keyof Types>>>;
