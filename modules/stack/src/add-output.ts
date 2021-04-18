import type { DataSourceMap } from './data-source-map';
import type { ResourceMap } from './resource-map';
import type { Scope } from './scope';
import type { ScopeWithAddedOutput } from './scope-with-added-output';
import type { TypedLocal } from './typed-local';
import type { TypedOutput } from './typed-output';
import type { TypedVariable } from './typed-variable';
import type { Types } from './types';

/**
 * Adds an output to a scope
 * @param scope Scope
 * @param outputId Output identifier
 * @param output Output
 * @returns Scope with the added output
 * @template Variables Variables
 * @template Locals Locals
 * @template Outputs Outputs
 * @template Resources Resources
 * @template DataSources Data sources
 * @template OutputTypeName Output type name
 * @template OutputId Output identifier
 */
export function addOutput<
  Variables extends Record<string, TypedVariable<keyof Types>>,
  Locals extends Record<string, TypedLocal<keyof Types>>,
  Outputs extends Record<string, TypedOutput<keyof Types>>,
  Resources extends Record<string, ResourceMap<string>>,
  DataSources extends Record<string, DataSourceMap<string>>,
  OutputTypeName extends keyof Types,
  OutputId extends string
>(
  scope: Scope<Variables, Locals, Outputs, Resources, DataSources>,
  outputId: OutputId,
  output: TypedOutput<OutputTypeName>
): ScopeWithAddedOutput<typeof scope, OutputTypeName, OutputId> {
  return {
    ...scope,
    outputs: {
      ...scope.outputs,
      [outputId]: output
    }
  };
}
