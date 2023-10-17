import { type NodeHostOptions } from './node-host-options';

/**
 * Builds Node host options with default values when necessary
 *
 * @param hostOptions Host options
 * @returns Host options with default values when necessary
 */
export function buildNodeHostOptions(hostOptions?: Partial<NodeHostOptions>): NodeHostOptions {
  const exitTimeout = hostOptions?.exitTimeout ?? 0;
  return {
    exitTimeout
  };
}
