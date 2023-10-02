import { type Observable } from '@komore/reactive';

import { type GenericTerraformLog } from '../log/generic-terraform-log';
import { executeTerraform } from './execute-terraform';
import { type TerraformPlanOptions } from './terraform-plan-options';

/**
 * Creates a function that executes a terraform apply command
 *
 * @param basePath Base path
 * @returns Function that executes a terraform apply command
 * @note {@link https://www.terraform.io/cli/commands/apply terraform apply}
 */
export function executeTerraformApply(
  basePath: string
): (options?: TerraformPlanOptions) => Observable<GenericTerraformLog> {
  const execute = executeTerraform(basePath);
  return _ => execute('plan', ['-detailed-exitcode', '-refresh=false']);
}
