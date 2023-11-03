import { getOpenTofuVersion } from '../version/get-opentofu-version';
import { type OpenTofuClient } from './opentofu-client';
import { type OpenTofuClientOptions } from './opentofu-client-options';

/**
 * Creates an OpenTofu client
 *
 * @param options OpenTofu client options
 * @returns OpenTofu client
 */
export function createOpenTofuClient(options: OpenTofuClientOptions): OpenTofuClient {
  const { workingDirectory } = options;
  const version = getOpenTofuVersion(workingDirectory);
  return {
    version,
  };
}
