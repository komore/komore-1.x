import { backend, type GenericScope, type ScopedConfiguration } from '@komore/stack';
import { GcsBackend, type GcsBackendProps } from 'cdktf';

/**
 * Adds a Google Cloud Storage backend
 * @param config Google Cloud Storage backend configuration
 * @template ScopeType Scope type
 */
export function googleCloudStorageBackend<ScopeType extends GenericScope>(
  config: ScopedConfiguration<ScopeType, GcsBackendProps>
) {
  return backend(GcsBackend, config);
}
