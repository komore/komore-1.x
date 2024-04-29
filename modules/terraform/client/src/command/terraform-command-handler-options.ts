import { type CommandEventRecorder } from '@komore/client';
import { type TerraformCliClient } from '@komore/terraform';

import { type terraformCommand } from '../terraform.command';
import { type terraformEvent } from '../terraform.event';

/**
 * Terraform command handler options
 */
export interface TerraformCommandHandlerOptions {
  /**
   * Terraform CLI client
   */
  readonly cliClient: TerraformCliClient;
  /**
   * Terraform events recorder
   */
  readonly toEvents: CommandEventRecorder<typeof terraformCommand, typeof terraformEvent>;
}
