/**
 * SNS message group identifier
 */
export type SnsMessageGroupId = string & {
  readonly __tag_awsSnsMessageGroupId: unique symbol;
};
