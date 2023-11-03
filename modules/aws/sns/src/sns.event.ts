import { type PublishBatchCommandOutput, type PublishCommandOutput } from '@aws-sdk/client-sns';

import { createAwsEventType } from '@komore/aws';
import { eventProperties } from '@komore/event';

import { snsDomain } from './sns.domain';

/**
 * SNS event
 */
export const snsEvent = createAwsEventType(snsDomain, {
  /**
   * Batch messages have been sent to a topic
   *
   * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_PublishBatch.html PublishBatch}
   */
  messageBatchPublished: eventProperties<PublishBatchCommandOutput>(),
  /**
   * A message has been published
   *
   * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_Publish.html Publish}
   */
  messagePublished: eventProperties<PublishCommandOutput>(),
});
