import { RedshiftDataClient as AwsSdkRedshiftDataClient } from '@aws-sdk/client-redshift-data';

import { createAwsClient } from '@komore/aws';

import { redshiftDataCommand } from '../redshift-data.command';
import { redshiftDataError } from '../redshift-data.error';
import { redshiftDataEvent } from '../redshift-data.event';
import { redshiftDataQuery } from '../redshift-data.query';
import { type RedshiftDataClient } from './redshift-data-client';
import { type RedshiftDataClientOptions } from './redshift-data-client-options';
import { redshiftDataCommandEventMapping } from './redshift-data-command-event-mapping';

/**
 * Creates a Redshift Data client
 *
 * @param clientOptions Redshift Data client options
 * @returns Redshift Data client
 */
export function createRedshiftDataClient(clientOptions: RedshiftDataClientOptions): RedshiftDataClient {
  return createAwsClient({
    clientClass: AwsSdkRedshiftDataClient,
    clientOptions,
    commandEventMapping: redshiftDataCommandEventMapping,
    commandType: redshiftDataCommand,
    errorType: redshiftDataError,
    eventType: redshiftDataEvent,
    queryType: redshiftDataQuery,
  });
}
