import { snsDomain, type PublishSnsMessageParameters } from '@komore/aws/sns';
import { commandProperties, createCommandType } from '@komore/command';

/**
 * SNS command
 */
export const snsCommand = createCommandType(snsDomain, {
  /**
   * Sends a message to a topic, a phone number or a mobile platform
   *
   * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_Publish.html Publish}
   */
  publish: commandProperties<PublishSnsMessageParameters>(),
  /**
   * Sends up to 10 messages to a topic
   *
   * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_PublishBatch.html PublishBatch}
   */
  publishBatch: commandProperties<PublishBatchCommandInput>(),
});
