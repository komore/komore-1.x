import { type AwsClient } from '@komore/aws';

import { type redshiftDataCommand } from '../redshift-data.command';
import { type redshiftDataError } from '../redshift-data.error';
import { type redshiftDataEvent } from '../redshift-data.event';
import { type redshiftDataQuery } from '../redshift-data.query';
import { type redshiftDataCommandEventMapping } from './redshift-data-command-event-mapping';

/**
 * Redshift Data client
 */
export type RedshiftDataClient = AwsClient<
  typeof redshiftDataCommand,
  typeof redshiftDataCommandEventMapping,
  typeof redshiftDataEvent,
  typeof redshiftDataQuery,
  typeof redshiftDataError
>;
