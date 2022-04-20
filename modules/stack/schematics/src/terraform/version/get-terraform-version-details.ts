import { jsonToObject } from '@komore/functional';
import { map, throwOnError, type Observable } from '@komore/reactive';
import { executeChildProcess } from '@komore/runtime/node';
import { TerraformNotFoundError } from '../terraform-not-found-error';
import { type TerraformVersionDetails } from './terraform-version-details';

/**
 * Returns the Terraform version details
 *
 * @param basePath Base path
 * @returns Terraform version details
 */
export function getTerraformVersionDetails(basePath: string): Observable<TerraformVersionDetails> {
  return executeChildProcess(`terraform version -json`, { cwd: basePath }).pipe(
    throwOnError(() => new TerraformNotFoundError('terraform command-line execution failed')),
    map(output => output.stdout),
    map(jsonToObject<TerraformVersionDetails>())
  );
}
