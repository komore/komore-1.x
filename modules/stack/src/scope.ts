import type { Construct } from 'constructs';
import type { DataSourceMap } from './data-source-map';
import type { ResourceMap } from './resource-map';
import type { TypedLocal } from './typed-local';
import type { TypedOutput } from './typed-output';
import type { TypedVariable } from './typed-variable';
import type { Types } from './types';

/**
 * Scope
 * @template Variables Variables
 * @template Locals Locals
 * @template Outputs Outputs
 * @template Resources Resources
 * @template DataSources Data sources
 */
export interface Scope<
  Variables extends Record<string, TypedVariable<keyof Types>> = Record<string, never>,
  Locals extends Record<string, TypedLocal<keyof Types>> = Record<string, never>,
  Outputs extends Record<string, TypedOutput<keyof Types>> = Record<string, never>,
  Resources extends Record<string, ResourceMap<string>> = Record<string, never>,
  DataSources extends Record<string, DataSourceMap<string>> = Record<string, never>
> {
  readonly construct: Construct;
  readonly dataSources: DataSources;
  readonly locals: Locals;
  readonly resources: Resources;
  readonly variables: Variables;
  readonly outputs: Outputs;
}

/**
 * Generic scope
 */
export type GenericScope = Scope<
  Record<string, TypedVariable<keyof Types>>,
  Record<string, TypedLocal<keyof Types>>,
  Record<string, TypedOutput<keyof Types>>,
  Record<string, ResourceMap<string>>,
  Record<string, DataSourceMap<string>>
>;
