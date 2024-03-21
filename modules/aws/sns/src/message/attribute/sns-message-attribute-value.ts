import { type SnsMessageBinaryAttributeValue } from './sns-message-binary-attribute-value';
import { type SnsMessageNumberAttributeValue } from './sns-message-number-attribute-value';
import { type SnsMessageStringArrayAttributeValue } from './sns-message-string-array-attribute-value';
import { type SnsMessageStringAttributeValue } from './sns-message-string-attribute-value';

/**
 * SNS message attribute value
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_MessageAttributeValue.html MessageAttributeValue}
 */
export type SnsMessageAttributeValue =
  | SnsMessageBinaryAttributeValue
  | SnsMessageNumberAttributeValue
  | SnsMessageStringArrayAttributeValue
  | SnsMessageStringAttributeValue;
