import { snsDomain, type PublishSnsMessageResult } from '@komore/aws/sns';
import { createEventType, eventProperties } from '@komore/event';

/**
 * SNS event
 */
export const snsEvent = createEventType(snsDomain, {
  /**
   * Batch messages have been sent to a topic
   *
   * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_PublishBatch.html PublishBatch}
   */
  messageBatchPublished: eventProperties<PublishSnsMessageBatchResult>(),
  /**
   * A message has been published
   *
   * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_Publish.html Publish}
   */
  messagePublished: eventProperties<PublishSnsMessageResult>(),
});
