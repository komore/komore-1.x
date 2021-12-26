import { type ReadonlyRecord } from '@komore/typescript';
import { type GenericScope } from './generic-scope';
import { type TypedLocal } from './typed-local';
import { type Types } from './types';

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
