import { type RegionalArn } from '@komore/aws';

import { type SnsTopicName } from '../../topic/name/sns-topic-name';
import { type SnsSubscriptionId } from '../id/sns-subscription-id';

/**
 * SNS subscription ARN
 */
export type SnsSubscriptionArn = RegionalArn<'sns', `${SnsTopicName}:${SnsSubscriptionId}`>;
