import { type TerraformVersion } from './terraform-version';
import { type TerraformVersionJson } from './terraform-version-json';

/**
 * Returns a Terraform version, given a Terraform version JSON
 *
 * @param json Terraform version JSON
 * @returns Terraform version
 * @private
 */
export function terraformVersionJsonToTerraformVersion(json: TerraformVersionJson): TerraformVersion {
  const { platform, provider_selections, terraform_outdated: isOutdated, terraform_version: version } = json;
  const providers = new Map(Object.entries(provider_selections));
  return {
    isOutdated,
    platform,
    providers,
    version,
  };
}
