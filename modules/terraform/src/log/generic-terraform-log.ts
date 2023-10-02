import { type TerraformLog } from './terraform-log';
import { type TerraformLogDetails } from './terraform-log-details';

/**
 * Generic Terraform log
 */
export type GenericTerraformLog = TerraformLog<keyof TerraformLogDetails>;
