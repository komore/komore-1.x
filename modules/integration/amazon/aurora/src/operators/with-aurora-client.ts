import { RDSDataClient } from '@aws-sdk/client-rds-data';
import { withAwsClient } from '@komore/integration-aws';

/**
 * Adds an Aurora client to a message
 * @param auroraClient Aurora client
 * @returns Unary function that turns a message into a message with an Aurora client
 */
export const withAuroraClient = (auroraClient: RDSDataClient) => withAwsClient('aurora', auroraClient);
