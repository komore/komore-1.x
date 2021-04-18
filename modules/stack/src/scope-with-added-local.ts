import type { GenericScope, TypedLocal, Types } from '@komore/stack';
import type { ReadonlyRecord } from '@komore/typescript';

/**
 * Scope with an added local
 * @template ScopeType Scope type
 * @template LocalTypeName Local type name
 * @template LocalId Local id
 */
export type ScopeWithAddedLocal<
  ScopeType extends GenericScope,
  LocalTypeName extends keyof Types,
  LocalId extends string
> = ScopeType & {
  readonly locals: ReadonlyRecord<LocalId, TypedLocal<LocalTypeName>>;
};
