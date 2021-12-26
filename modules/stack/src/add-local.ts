import { type DataSourceMap } from './data-source-map';
import { type ResourceMap } from './resource-map';
import { type Scope } from './scope';
import { type ScopeWithAddedLocal } from './scope-with-added-local';
import { type TypedLocal } from './typed-local';
import { type TypedOutput } from './typed-output';
import { type TypedVariable } from './typed-variable';
import { type Types } from './types';

/**
 * Adds a local to a scope
 * @param scope Scope
 * @param localId Local identifier
 * @param local Local
 * @returns Scope with the added local
 * @template Variables Variables
 * @template Locals Locals
 * @template Outputs Outputs
 * @template Resources Resources
 * @template DataSources Data sources
 * @template LocalTypeName Local type name
 * @template LocalId Local identifier
 */
export function addLocal<
  Variables extends Record<string, TypedVariable<keyof Types>>,
  Locals extends Record<string, TypedLocal<keyof Types>>,
  Outputs extends Record<string, TypedOutput<keyof Types>>,
  Resources extends Record<string, ResourceMap<string>>,
  DataSources extends Record<string, DataSourceMap<string>>,
  LocalTypeName extends keyof Types,
  LocalId extends string
>(
  scope: Scope<Variables, Locals, Outputs, Resources, DataSources>,
  localId: LocalId,
  local: TypedLocal<LocalTypeName>
): ScopeWithAddedLocal<typeof scope, LocalTypeName, LocalId> {
  return {
    ...scope,
    locals: {
      ...scope.locals,
      [localId]: local
    }
  };
}
