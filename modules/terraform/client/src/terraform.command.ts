import { commandProperties, createCommandType } from '@komore/command';
import { terraformDomain } from '@komore/terraform';

import { type TerraformApplyParameters } from './apply/terraform-apply-parameters';
import { type TerraformDestroyParameters } from './destroy/terraform-destroy-parameters';
import { type TerraformInitParameters } from './init/terraform-init-parameters';
import { type TerraformPlanParameters } from './plan/terraform-plan-parameters';

/**
 * Terraform command
 */
export const terraformCommand = createCommandType(terraformDomain, {
  /**
   * Applies an execution plan
   *
   * @see {@link https://terraform.io/docs/cli/commands/apply terraform apply}
   */
  apply: commandProperties<TerraformApplyParameters>(),
  /**
   * Destroys objects managed by a configuration
   *
   * @see {@link https://terraform.io/docs/cli/commands/destroy terraform destroy}
   */
  destroy: commandProperties<TerraformDestroyParameters>(),
  /**
   * Initializes a working directory
   *
   * @see {@link https://terraform.io/docs/cli/commands/init terraform init}
   */
  initialize: commandProperties<TerraformInitParameters>(),
  /**
   * Creates an execution plan
   *
   * @see {@link https://terraform.io/docs/cli/commands/plan terraform plan}
   */
  plan: commandProperties<TerraformPlanParameters>(),
});
