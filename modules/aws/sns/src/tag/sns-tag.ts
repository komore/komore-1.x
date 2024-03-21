/**
 * SNS tag
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_Tag.html Tag}
 */
export interface SnsTag {
  /**
   * Key
   */
  readonly Key: string;
  /**
   * Value
   */
  readonly Value: string;
}
