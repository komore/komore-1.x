import { type Observable } from '@komore/reactive';
import { executeTerraformCommand } from '../execute-terraform-command';

export function executeTerraformInit(basePath: string): Observable<unknown> {
  return executeTerraformCommand(basePath, 'init', []);
}
