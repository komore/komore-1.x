import { RedshiftClient } from '@aws-sdk/client-redshift';
import { withAwsClient } from '@komore/integration-aws';

/**
 * Adds a Redshift client to a message
 * @param redshiftClient Redshift client
 * @returns Unary function that turns a message into a message with a Redshift client
 */
export const withRedshiftClient = (redshiftClient: RedshiftClient) =>
  withAwsClient('redshift', redshiftClient ?? new RedshiftClient({}));
