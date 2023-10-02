import { type TerraformApplyOptions } from './terraform-apply-options';

/**
 * terraform destroy options
 *
 * @note {@link https://www.terraform.io/cli/commands/destroy terraform destroy}
 */
export type TerraformDestroyOptions = Omit<TerraformApplyOptions, 'destroy'>;
