import { jsonToObject } from '@komore/json';
import { map, throwOnError } from '@komore/reactive';

import { type TerraformCliClient } from '../terraform-cli-client';
import { terraformCliError } from '../terraform-cli.error';
import { type TerraformVersion } from './terraform-version';
import { type TerraformVersionJson } from './terraform-version-json';
import { terraformVersionJsonToTerraformVersion } from './terraform-version-json-to-terraform-version';

/**
 * Creates a function that returns the Terraform version
 *
 * @param cliClient Terraform CLI client
 * @returns Function that returns the Terraform version
 */
export function getTerraformVersion(cliClient: TerraformCliClient): () => Observable<TerraformVersion> {
  return () =>
    cliClient(['version', '-json']).pipe(
      throwOnError(terraformCliError.notFound),
      map(jsonToObject<TerraformVersionJson>()),
      map(terraformVersionJsonToTerraformVersion)
    );
}
