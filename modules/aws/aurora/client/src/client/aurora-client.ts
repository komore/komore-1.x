import { type AwsClient } from '@komore/aws/client';

import { type auroraCommand } from '../aurora.command';
import { type auroraError } from '../aurora.error';
import { type auroraEvent } from '../aurora.event';
import { type auroraQuery } from '../aurora.query';
import { type auroraClientCommandEventMapping } from './aurora-client-command-event-mapping';

/**
 * Aurora client
 */
export type AuroraClient = AwsClient<
  typeof auroraCommand,
  typeof auroraEvent,
  typeof auroraQuery,
  typeof auroraError,
  typeof auroraClientCommandEventMapping
>;
