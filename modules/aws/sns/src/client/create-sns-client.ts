import { SNSClient } from '@aws-sdk/client-sns';

import { createAwsClient } from '@komore/aws';

import { snsCommand } from '../sns.command';
import { snsError } from '../sns.error';
import { snsEvent } from '../sns.event';
import { type SnsClient } from './sns-client';
import { type SnsClientOptions } from './sns-client-options';
import { snsCommandEventMapping } from './sns-command-event-mapping';

/**
 * Creates an SNS client
 *
 * @param options SNS client options
 * @returns SNS client
 */
export function createSnsClient(options: SnsClientOptions): SnsClient {
  return createAwsClient({
    commandEventMapping: snsCommandEventMapping,
    commandType: snsCommand,
    constructor: SNSClient,
    errorType: snsError,
    eventType: snsEvent,
    options,
  });
}
