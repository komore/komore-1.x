import type { Construct } from 'constructs';
import type { TypedVariable } from "./typed-variable";
import type { Types } from "./types";

/**
 * Scope
 * @template Variables Variables
 */
export interface Scope<Variables extends Record<string, TypedVariable<keyof Types>>> {
  readonly variables: Variables;
  readonly construct: Construct;
}
