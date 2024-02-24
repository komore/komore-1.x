import { SQSClient } from '@aws-sdk/client-sqs';

import { createAwsClient } from '@komore/aws';

import { sqsCommand } from '../sqs.command';
import { sqsQuery } from '../sqs.query';
import { sqsError } from '../sqs.error';
import { sqsEvent } from '../sqs.event';
import { type SqsClient } from './sqs-client';
import { type SqsClientOptions } from './sqs-client-options';

/**
 * Creates an SQS client
 *
 * @param options SQS client options
 * @returns SQS client
 */
export function createSqsClient(options: SqsClientOptions): SqsClient {
  return createAwsClient({
    commandEventMapping: sqsCommandEventMapping,
    commandType: sqsCommand,
    constructor: SQSClient,
    errorType: sqsError,
    eventType: sqsEvent,
    options,
    queryType: sqsQuery,
  });
}
