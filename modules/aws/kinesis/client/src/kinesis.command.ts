import { createAwsCommandType } from '@komore/aws';

import { kinesisDomain } from './kinesis.domain';

/**
 * Kinesis command
 */
export const kinesisCommand = createAwsCommandType(kinesisDomain, {});
