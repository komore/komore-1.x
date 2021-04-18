import type { DataSourceMap } from './data-source-map';
import type { ResourceMap } from './resource-map';
import type { Scope } from './scope';
import type { TypedLocal } from './typed-local';
import type { TypedOutput } from './typed-output';
import type { TypedVariable } from './typed-variable';
import type { Types } from './types';

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
