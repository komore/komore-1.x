import { type BaseTerraformLog } from './base-terraform-log';
import { type TerraformLogDetails } from './terraform-log-details';

/**
 * Terraform log
 *
 * @template LogType Log type
 */
export type TerraformLog<LogType extends keyof TerraformLogDetails> = BaseTerraformLog<LogType> &
  TerraformLogDetails[LogType];
