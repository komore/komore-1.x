import { map, type MonoTypeOperatorFunction } from '@komore/reactive';
import { type TerraformBackend } from 'cdktf';
import { type Construct } from 'constructs';
import { type GenericScope } from '../scope/generic-scope';
import { type ScopedConfiguration } from '../scope/scoped-configuration';
import { resolveConfig } from './resolve-config';

/**
 * Adds a backend
 *
 * @param dataSourceId Data source identifier
 * @param constructor Data source class constructor
 * @param config Configuration or function that returns the configuration
 * @returns Operator function that adds a backend to a scope
 * @template ScopeType Scope type
 * @template BackendType Backend type
 * @template ConfigType Configuration type
 */
export function backend<ScopeType extends GenericScope, BackendType extends TerraformBackend, ConfigType>(
  constructor: new (construct: Construct, config: ConfigType) => BackendType,
  config: ScopedConfiguration<ScopeType, ConfigType>
): MonoTypeOperatorFunction<ScopeType> {
  return map(scope => {
    const backendConfig = resolveConfig(scope, config);
    // TODO: can be an issue if done more than once
    new constructor(scope.construct, backendConfig);
    return scope;
  });
}
