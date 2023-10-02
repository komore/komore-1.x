import { type Observable } from '@komore/reactive';

import { type GenericTerraformLog } from '../log/generic-terraform-log';
import { executeTerraform } from './execute-terraform';
import { type TerraformPlanOptions } from './terraform-plan-options';

/**
 * Creates a function that executes a terraform plan command
 *
 * @param basePath Base path
 * @returns Function that executes a terraform plan command
 * @note {@link https://www.terraform.io/cli/commands/plan terraform plan}
 */
export function executeTerraformPlan(
  basePath: string
): (options?: TerraformPlanOptions) => Observable<GenericTerraformLog> {
  const execute = executeTerraform(basePath);
  return _options => execute('plan', ['-detailed-exitcode', '-refresh=false']);
}
