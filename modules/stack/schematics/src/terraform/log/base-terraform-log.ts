import { type TerraformLogDetails } from './terraform-log-details';
import { type TerraformLogLevel } from './terraform-log-level';

/**
 * Base Terraform log
 *
 * @template LogType Log type
 */
export interface BaseTerraformLog<LogType extends keyof TerraformLogDetails> {
  readonly '@level': TerraformLogLevel;
  readonly '@message': string;
  readonly '@module': string;
  readonly '@timestamp': string;
  readonly type: LogType;
}
