import { RedshiftClient as AwsSdkRedshiftClient } from '@aws-sdk/client-redshift';

import { createAwsClient } from '@komore/aws';

import { redshiftCommand } from '../redshift.command';
import { redshiftQuery } from '../redshift.query';
import { redshiftError } from '../redshift.error';
import { redshiftEvent } from '../redshift.event';
import { type RedshiftClient } from './redshift-client';
import { type RedshiftClientOptions } from './redshift-client-options';
import { redshiftCommandEventMapping } from './redshift-command-event-mapping';

/**
 * Creates a Redshift client
 *
 * @param clientOptions Redshift client options
 * @returns Redshift client
 */
export function createRedshiftClient(clientOptions: RedshiftClientOptions): RedshiftClient {
  return createAwsClient({
    clientClass: AwsSdkRedshiftClient,
    clientOptions,
    commandEventMapping: redshiftCommandEventMapping,
    commandType: redshiftCommand,
    errorType: redshiftError,
    eventType: redshiftEvent,
    queryType: redshiftQuery,
  });
}
