import { type TerraformVersion } from './terraform-version';
import { type TerraformVersionJson } from './terraform-version-json';

/**
 * Returns an Terraform version, given an Terraform version JSON
 *
 * @param json Terraform version JSON
 * @returns Terraform version
 * @private
 */
export function terraformVersionJsonToTerraformVersion(json: TerraformVersionJson): TerraformVersion {
  const {
    platform,
    provider_selections: providers,
    terraform_outdated: outdated = false,
    terraform_version: version,
  } = json;
  return {
    outdated,
    platform,
    providers,
    version,
  };
}
