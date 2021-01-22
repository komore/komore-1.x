import type { LambdaClient } from '@aws-sdk/client-lambda';
import { withAwsClient } from '@komore/integration-amazon';
import { createLambdaClient } from '../create-lambda-client';

/**
 * Adds a Lambda client to a message
 * @param lambdaClient Lambda client
 * @returns Operator function that turns a message into a message with a Lambda client
 */
export const withLambdaClient = (lambdaClient?: LambdaClient) =>
  withAwsClient('lambda', lambdaClient ?? createLambdaClient());
