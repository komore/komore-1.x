import { sqsDomain } from '@komore/aws/sqs';
import { createAwsEventType } from '@komore/aws';

/**
 * SQS event
 */
export const sqsEvent = createAwsEventType(sqsDomain, {});
