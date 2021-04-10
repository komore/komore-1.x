import type { GenericScope, TypedOutput, Types } from '@komore/stack';
import type { ReadonlyRecord } from '@komore/typescript';

/**
 * Scope with an added data source
 * @template ScopeType Scope type
 * @template OutputId Output identifier
 * @template OutputType Output type
 */
export type ScopeWithAddedOutput<
  ScopeType extends GenericScope,
  OutputId extends string,
  OutputType extends TypedOutput<keyof Types>
> = ScopeType & {
  readonly outputs: ReadonlyRecord<OutputId, OutputType>;
};
