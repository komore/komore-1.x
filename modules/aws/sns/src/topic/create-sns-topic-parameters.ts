import { type JsonString } from '@komore/json';
import { type ReadonlyRecord } from '@komore/typescript';

import { type SnsTopicName } from './name/sns-topic-name';
import { type SnsTag } from '../tag/sns-tag';

/**
 * Create SNS topic parameters
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html#API_CreateTopic_RequestParameters CreateTopic Request Parameters}
 */
export interface CreateSnsTopicParameters {
  /**
   * Attributes
   */
  readonly Attributes: ReadonlyRecord<string, string>; // TODO: better types?
  /**
   * Data protection policy document body
   */
  readonly DataProtectionPolicy: JsonString; // TODO: IAM type?
  /**
   * Topic name
   */
  readonly Name: SnsTopicName;
  /**
   * List of tags
   */
  readonly Tags?: ReadonlyArray<SnsTag>;
}
