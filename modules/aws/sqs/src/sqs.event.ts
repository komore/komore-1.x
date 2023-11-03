import { createAwsEventType } from '@komore/aws';

import { sqsDomain } from './sqs.domain';

/**
 * SQS event
 */
export const sqsEvent = createAwsEventType(sqsDomain, {});
