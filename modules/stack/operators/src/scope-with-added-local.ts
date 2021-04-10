import type { GenericScope, TypedLocal, Types } from '@komore/stack';
import type { ReadonlyRecord } from '@komore/typescript';

/**
 * Scope with an added local
 * @template ScopeType Scope type
 * @template LocalId Local id
 * @template LocalType Local type
 */
export type ScopeWithAddedLocal<
  ScopeType extends GenericScope,
  LocalId extends string,
  LocalType extends TypedLocal<keyof Types>
> = ScopeType & {
  readonly locals: ReadonlyRecord<LocalId, LocalType>;
};
