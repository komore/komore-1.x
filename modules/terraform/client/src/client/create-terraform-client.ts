import { createClient } from '@komore/client';

import { createTerraformQueryHandler } from '../query/create-terraform-query-handler';
import { terraformCommand } from '../terraform.command';
import { createTerraformCommandHandler } from '../command/create-terraform-command-handler';
import { terraformError } from '../terraform.error';
import { terraformEvent } from '../terraform.event';
import { terraformQuery } from '../terraform.query';
import { type TerraformClient } from './terraform-client';
import { terraformClientCommandEventMap } from './terraform-client-command-event-map';
import { type TerraformClientOptions } from './terraform-client-options';

/**
 * Creates an Terraform client
 *
 * @param clientOptions Terraform client options
 * @returns Terraform client
 */
export function createTerraformClient(clientOptions: TerraformClientOptions): TerraformClient {
  const { cliClient } = clientOptions;
  return createClient({
    command: terraformCommand,
    commandEventMap: terraformClientCommandEventMap,
    commandHandler: ({ toEvents }) => createTerraformCommandHandler({ cliClient, toEvents }),
    error: terraformError,
    event: terraformEvent,
    query: terraformQuery,
    queryHandler: () => createTerraformQueryHandler({ cliClient }),
  });
}
