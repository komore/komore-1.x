import { type Observable } from '@komore/reactive';

import { type GenericTerraformLog } from '../log/generic-terraform-log';
import { executeTerraform } from './execute-terraform';
import { type TerraformDestroyOptions } from './terraform-destroy-options';

/**
 * Creates a function that executes a terraform destroy command
 *
 * @param basePath Base path
 * @returns Function that executes a terraform destroy command
 * @note {@link https://www.terraform.io/cli/commands/destroy terraform destroy}
 */
export function executeTerraformDestroy(
  basePath: string
): (options: TerraformDestroyOptions) => Observable<GenericTerraformLog> {
  const execute = executeTerraform(basePath);
  return _ => execute('destroy', []);
}
