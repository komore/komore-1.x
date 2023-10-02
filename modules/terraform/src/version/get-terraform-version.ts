import { jsonToObject } from '@komore/json';
import { executeChildProcess } from '@komore/node';
import { map, throwOnError, type Observable } from '@komore/reactive';

import { TerraformNotFoundError } from '../error/terraform-not-found-error';
import { type TerraformVersion } from './terraform-version';
import { type TerraformVersionJson } from './terraform-version-json';
import { terraformVersionJsonToTerraformVersion } from './terraform-version-json-to-terraform-version';

/**
 * Returns the Terraform version
 *
 * @param basePath Base path
 * @returns Terraform version
 */
export function getTerraformVersion(basePath: string): Observable<TerraformVersion> {
  return executeChildProcess(`terraform version -json`, { cwd: basePath }).pipe(
    throwOnError(() => new TerraformNotFoundError('terraform command-line execution failed')),
    map(output => output.stdout),
    map(jsonToObject<TerraformVersionJson>()),
    map(terraformVersionJsonToTerraformVersion)
  );
}
