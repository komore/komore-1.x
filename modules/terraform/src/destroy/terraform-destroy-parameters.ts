import { type TerraformApplyParameters } from '../apply/terraform-apply-parameters';

/**
 * `terraform destroy` parameters
 *
 * @note {@link https://terraform.io/docs/cli/commands/destroy terraform destroy}
 */
export type TerraformDestroyParameters = Omit<TerraformApplyParameters, 'destroy'>;
