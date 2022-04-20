import { type RedshiftDataClient } from '@aws-sdk/client-redshift-data';
import { withAwsClient } from '@komore/integration-aws';
import { createRedshiftDataClient } from '../create-redshift-data-client';

/**
 * Adds a Redshift client to a message
 *
 * @param redshiftClient Redshift client
 * @returns Unary function that turns a message into a message with a Redshift client
 */
export const withRedshiftClient = (redshiftClient: RedshiftDataClient) =>
  withAwsClient('redshift', redshiftClient ?? createRedshiftDataClient());
