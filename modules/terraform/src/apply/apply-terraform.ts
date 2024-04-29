import { type TerraformCliClient } from '../terraform-cli-client';
import { type TerraformApplyParameters } from './terraform-apply-parameters';
import { type TerraformApplyResult } from './terraform-apply-result';

/**
 * Creates a function that applies a Terraform plan
 *
 * @param cliClient Terraform CLI client
 * @returns Function that applies a Terraform plan
 */
export function applyTerraform(
  cliClient: TerraformCliClient
): (parameters: TerraformApplyParameters) => Observable<TerraformApplyResult> {
  return _parameters => cliClient(['apply']);
}
