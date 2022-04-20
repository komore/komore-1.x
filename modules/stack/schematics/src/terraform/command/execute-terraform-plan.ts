import { type Observable } from '@komore/reactive';
import { executeTerraformCommand } from '../execute-terraform-command';
import { type TerraformPlanOptions } from './terraform-plan-options';

/**
 * Executes a terraform plan command
 *
 * @param basePath Base path
 * @param outputPath Output path for the plan file
 */
export function executeTerraformPlan(basePath: string, _options?: TerraformPlanOptions): Observable<unknown> {
  return executeTerraformCommand(basePath, 'plan', ['-detailed-exitcode', '-refresh=false']);
}
