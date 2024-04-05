import { type AwsClient } from '@komore/aws';

import { type neptuneCommand } from '../neptune.command';
import { type neptuneError } from '../neptune.error';
import { type neptuneEvent } from '../neptune.event';
import { type neptuneQuery } from '../neptune.query';
import { type neptuneCommandEventMapping } from './neptune-command-event-mapping';

/**
 * Neptune client
 */
export type NeptuneClient = AwsClient<
  typeof neptuneCommand,
  typeof neptuneCommandEventMapping,
  typeof neptuneEvent,
  typeof neptuneQuery,
  typeof neptuneError
>;
