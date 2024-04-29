import { type Client } from '@komore/client';

import { type terraformCommand } from '../terraform.command';
import { type terraformError } from '../terraform.error';
import { type terraformEvent } from '../terraform.event';
import { type terraformQuery } from '../terraform.query';
import { type terraformClientCommandEventMap } from './terraform-client-command-event-map';

/**
 * Terraform client
 */
export type TerraformClient = Client<
  typeof terraformCommand,
  typeof terraformEvent,
  typeof terraformQuery,
  typeof terraformError,
  typeof terraformClientCommandEventMap
>;
