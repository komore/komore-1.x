/**
 * Node environment variable resolver
 *
 * @private
 */
export interface NodeEnvironmentVariableResolver<T> {
  (value: string | undefined, name: string): T;
}
