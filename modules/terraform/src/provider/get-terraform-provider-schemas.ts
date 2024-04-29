import { jsonToObject } from '@komore/json';
import { map } from '@komore/reactive';

import { type TerraformCliClient } from '../terraform-cli-client';
import { type TerraformProviderSchemasJson } from './json/terraform-provider-schemas-json';
import { terraformProviderSchemasJsonToTerraformProviderSchemas } from './json/terraform-provider-schemas-json-to-terraform-provider-schemas';
import { type TerraformProviderSchema } from './terraform-provider-schema';

/**
 * Creates a function that returns the Terraform provider schemas
 *
 * @param cliClient Terraform CLI client
 * @returns Function that returns the Terraform provider schemas
 */
export function getTerraformProviderSchemas(
  cliClient: TerraformCliClient
): () => Observable<ReadonlyArray<TerraformProviderSchema>> {
  return () =>
    cliClient(['providers', 'schema', '-json']).pipe(
      map(jsonToObject<TerraformProviderSchemasJson>()),
      map(terraformProviderSchemasJsonToTerraformProviderSchemas)
    );
}
