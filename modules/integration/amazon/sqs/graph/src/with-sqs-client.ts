import type { SQSClient } from '@aws-sdk/client-sqs';
import { withAmazonClient } from '@komore/integration-amazon/graph';
import { createSQSClient } from '@komore/integration-amazon/sqs';

/**
 * Creates a function that adds an SQS client to a message
 * @param sqsClient SQS client
 * @returns Function that adds an SQS client to a message
 */
export const withSQSClient = (sqsClient?: SQSClient) => withAmazonClient('sqs', sqsClient ?? createSQSClient());
