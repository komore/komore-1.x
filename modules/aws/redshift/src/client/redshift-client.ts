import { type AwsClient } from '@komore/aws';

import { type redshiftCommand } from '../redshift.command';
import { type redshiftError } from '../redshift.error';
import { type redshiftEvent } from '../redshift.event';
import { type redshiftQuery } from '../redshift.query';
import { type redshiftCommandEventMapping } from './redshift-command-event-mapping';

/**
 * Redshift client
 */
export type RedshiftClient = AwsClient<
  typeof redshiftCommand,
  typeof redshiftCommandEventMapping,
  typeof redshiftEvent,
  typeof redshiftQuery,
  typeof redshiftError
>;
