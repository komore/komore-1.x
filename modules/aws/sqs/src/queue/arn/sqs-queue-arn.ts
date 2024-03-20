import { type RegionalArn } from '@komore/aws';

/**
 * SQS queue ARN
 */
export type SqsQueueArn = RegionalArn<'sqs', string>;
