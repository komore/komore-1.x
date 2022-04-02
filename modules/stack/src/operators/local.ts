import { map, type OperatorFunction } from '@komore/reactive';
import { TerraformLocal } from 'cdktf';
import { type GenericScope } from '../scope/generic-scope';
import { type ScopeWithAddedLocal } from '../scope/scope-with-added-local';
import { type TypedLocal } from '../type/typed-local';
import { type StackTypeNames } from '../type/stack-type-names';

/**
 * Adds a local
 *
 * @param localId Local identifier
 * @param typeName Local type name
 * @param expression Expression
 * @returns Operator function that adds a local to a scope
 * @template ScopeType Scope type
 * @template LocalTypeName Local type name
 * @template LocalId Local identifier
 */
export function local<
  ScopeType extends GenericScope,
  LocalTypeName extends keyof StackTypeNames,
  LocalId extends string
>(
  localId: LocalId,
  _typeName: LocalTypeName,
  expression: string
): OperatorFunction<ScopeType, ScopeWithAddedLocal<ScopeType, LocalId, StackTypeNames[LocalTypeName]>> {
  return map(scope => {
    const local = new TerraformLocal(scope.construct, localId, expression) as unknown as TypedLocal<
      StackTypeNames[LocalTypeName]
    >;
    return {
      ...scope,
      outputs: {
        ...scope.variables,
        [localId]: local,
      },
    } as unknown as ScopeWithAddedLocal<ScopeType, LocalId, StackTypeNames[LocalTypeName]>;
  });
}
