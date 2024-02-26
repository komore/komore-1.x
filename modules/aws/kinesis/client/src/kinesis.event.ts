import { createAwsEventType } from '@komore/aws';

import { kinesisDomain } from './kinesis.domain';

/**
 * Kinesis event
 */
export const kinesisEvent = createAwsEventType(kinesisDomain, {});
