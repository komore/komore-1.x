import { type PublishBatchCommandInput, type PublishCommandInput } from '@aws-sdk/client-sns';

import { createAwsCommandType } from '@komore/aws';
import { commandProperties } from '@komore/command';

import { snsDomain } from './sns.domain';

/**
 * SNS command
 */
export const snsCommand = createAwsCommandType(snsDomain, {
  /**
   * Sends a message to a topic, a phone number or a mobile platform
   *
   * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_Publish.html Publish}
   */
  publish: commandProperties<PublishCommandInput>(),
  /**
   * Sends up to 10 messages to a topic
   *
   * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_PublishBatch.html PublishBatch}
   */
  publishBatch: commandProperties<PublishBatchCommandInput>(),
});
