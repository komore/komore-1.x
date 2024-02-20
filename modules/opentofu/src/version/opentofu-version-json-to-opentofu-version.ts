import { type OpenTofuVersion } from './opentofu-version';
import { type OpenTofuVersionJson } from './opentofu-version-json';

/**
 * Returns an OpenTofu version, given an OpenTofu version JSON
 *
 * @param json OpenTofu version JSON
 * @returns OpenTofu version
 * @private
 */
export function opentofuVersionJsonToOpenTofuVersion(json: OpenTofuVersionJson): OpenTofuVersion {
  const { platform, provider_selections, terraform_version: version } = json;
  const providers = new Map(Object.entries(provider_selections));
  return {
    platform,
    providers,
    version,
  };
}
