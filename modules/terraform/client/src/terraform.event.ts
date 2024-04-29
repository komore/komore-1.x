import { createEventType, eventProperties } from '@komore/event';
import { terraformDomain } from '@komore/terraform';

import { type GenericTerraformLog } from './log/generic-terraform-log';
import { TerraformInitResult } from './init/terraform-init-result';
import { TerraformApplyResult } from './apply/terraform-apply-result';

/**
 * Terraform event
 */
export const terraformEvent = createEventType(terraformDomain, {
  /**
   * An execution plan was applied
   *
   * @see {@link https://terraform.io/docs/cli/commands/apply terraform apply}
   */
  applied: eventProperties<TerraformApplyResult>(),
  /**
   * A working directory was initialized
   *
   * @see {@link https://terraform.io/docs/cli/commands/init terraform init}
   */
  initialized: eventProperties<TerraformInitResult>(),
  /**
   * A log message was printed
   */
  logPrinted: eventProperties<GenericTerraformLog>(),
});
