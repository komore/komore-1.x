import { type RegionalArn } from '@komore/aws';

import { type SnsTopicName } from '../name/sns-topic-name';

/**
 * SNS topic ARN
 */
export type SnsTopicArn = RegionalArn<'sns', SnsTopicName>;
