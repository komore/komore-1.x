import { type Observable } from '@komore/reactive';

import { type GenericTerraformLog } from '../log/generic-terraform-log';
import { executeTerraform } from './execute-terraform';
import { type TerraformInitOptions } from './terraform-init-options';

/**
 * Creates a function that executes a terraform init command
 *
 * @param basePath Base path
 * @returns Function that executes a terraform init command
 * @note {@link https://www.terraform.io/cli/commands/init terraform init}
 */
export function executeTerraformInit(
  basePath: string
): (options?: Partial<TerraformInitOptions>) => Observable<GenericTerraformLog> {
  const execute = executeTerraform(basePath);
  return _options => execute('init', []);
}
