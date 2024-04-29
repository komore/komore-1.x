import { matchQuery } from '@komore/query';
import { getTerraformProviders, getTerraformVersion } from '@komore/terraform';

import { type TerraformQueryHandler } from './terraform-query-handler';
import { type TerraformQueryHandlerOptions } from './terraform-query-handler-options';

/**
 * Creates an Terraform query handler
 *
 * @param handlerOptions Terraform query handler options
 * @returns Terraform query handler
 */
export function createTerraformQueryHandler(handlerOptions: TerraformQueryHandlerOptions): TerraformQueryHandler {
  const { cliClient } = handlerOptions;
  const providers = getTerraformProviders(cliClient);
  const show = void 0;
  const version = getTerraformVersion(cliClient);
  return query =>
    matchQuery(query, {
      providers,
      show,
      version,
    });
}
