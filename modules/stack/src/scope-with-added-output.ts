import { type GenericScope, type TypedOutput, type Types } from '@komore/stack';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Scope with an added data source
 * @template ScopeType Scope type
 * @template OutputTypeName Output type name
 * @template OutputId Output identifier
 */
export type ScopeWithAddedOutput<
  ScopeType extends GenericScope,
  OutputTypeName extends keyof Types,
  OutputId extends string
> = ScopeType & {
  readonly outputs: ReadonlyRecord<OutputId, TypedOutput<OutputTypeName>>;
};
