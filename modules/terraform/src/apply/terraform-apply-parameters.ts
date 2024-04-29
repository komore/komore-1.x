import { type TerraformPlanParameters } from '../plan/terraform-plan-parameters';

/**
 * `terraform apply` parameters
 *
 * @note {@link https://terraform.io/docs/cli/commands/apply terraform apply}
 */
export interface TerraformApplyParameters extends TerraformPlanParameters {}
