import { type Types } from './types';

/**
 * Typed value
 * @param K Value type name
 */
export interface TypedValue<K extends keyof Types> {
  readonly type: K;
  readonly value: Types[K];
}
