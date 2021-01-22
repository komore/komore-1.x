import type { SQSClient } from '@aws-sdk/client-sqs';
import { withAwsClient } from '@komore/integration-amazon';
import { createSQSClient } from '../create-sqs-client';

/**
 * Adds an SQS client to a message
 * @param sqsClient SQS client
 * @returns Unary function that turns a message into a message with an SQS client
 */
export const withSQSClient = (sqsClient?: SQSClient) => withAwsClient('sqs', sqsClient ?? createSQSClient());
