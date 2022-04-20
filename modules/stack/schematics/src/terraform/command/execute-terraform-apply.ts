import { executeTerraformCommand } from '../execute-terraform-command';

/**
 * Executes a terraform apply command
 *
 * @param basePath Base path
 * @param 
 */
export function executeTerraformPlan(basePath: string, _outputPath?: string) {
  executeTerraformCommand(basePath, 'plan', ['-detailed-exitcode', '-refresh=false']);
}
