import { type SNSClient } from '@aws-sdk/client-sns';
import { withAwsClient } from '@komore/integration-aws';
import { createSNSClient } from '../create-sns-client';

/**
 * Adds an SNS client to a message
 * @param snsClient SNS client
 * @returns Operator function that turns a message into a message with an SNS client
 */
export const withSNSClient = (snsClient?: SNSClient) => withAwsClient('sns', snsClient ?? createSNSClient());
