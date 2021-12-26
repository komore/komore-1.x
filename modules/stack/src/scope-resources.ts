import { type DataSourceMap } from './data-source-map';
import { type GenericScope } from './generic-scope';
import { type Scope } from './scope';
import { type TypedLocal } from './typed-local';
import { type TypedOutput } from './typed-output';
import { type TypedVariable } from './typed-variable';
import { type Types } from './types';

/**
 * Scope resources
 * @template ScopeType Scope type
 */
export type ScopeResources<ScopeType extends GenericScope> = ScopeType extends Scope<
  Record<string, TypedVariable<keyof Types>>,
  Record<string, TypedLocal<keyof Types>>,
  Record<string, TypedOutput<keyof Types>>,
  infer Resources,
  Record<string, DataSourceMap<string>>
>
  ? Resources
  : never;
