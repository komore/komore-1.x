import type { Types } from '@komore/stack';

/**
 * Variable properties
 */
export interface VariableProperties<K extends keyof Types> {
  readonly default?: Types[K];
  readonly description?: string;
  readonly sensitive?: boolean;
}
