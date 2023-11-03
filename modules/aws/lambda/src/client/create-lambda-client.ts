import { LambdaClient as AwsSdkLambdaClient } from '@aws-sdk/client-lambda';

import { createAwsClient } from '@komore/aws';

import { lambdaCommand } from '../lambda.command';
import { lambdaError } from '../lambda.error';
import { lambdaEvent } from '../lambda.event';
import { lambdaQuery } from '../lambda.query';
import { type LambdaClient } from './lambda-client';
import { type LambdaClientOptions } from './lambda-client-options';
import { lambdaCommandEventMapping } from './lambda-command-event-mapping';

/**
 * Creates a Lambda client
 *
 * @param clientOptions Lambda client options
 * @returns Lambda client
 */
export function createLambdaClient(clientOptions: LambdaClientOptions): LambdaClient {
  return createAwsClient({
    clientClass: AwsSdkLambdaClient,
    clientOptions,
    commandEventMapping: lambdaCommandEventMapping,
    commandType: lambdaCommand,
    errorType: lambdaError,
    eventType: lambdaEvent,
    queryType: lambdaQuery,
  });
}
