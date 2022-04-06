import { backend, type GenericScope, type ScopedConfiguration } from '@komore/stack';
import { S3Backend, type S3BackendProps } from 'cdktf';

/**
 * Adds an S3 backend
 * @param config S3 backend configuration
 * @template ScopeType Scope type
 */
export function s3Backend<ScopeType extends GenericScope>(config: ScopedConfiguration<ScopeType, S3BackendProps>) {
  return backend(S3Backend, config);
}
