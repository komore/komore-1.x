import { type SqsMessageBinaryAttributeValue } from './sqs-message-binary-attribute-value';
import { type SqsMessageNumberAttributeValue } from './sqs-message-number-attribute-value';
import { type SqsMessageStringAttributeValue } from './sqs-message-string-attribute-value';

/**
 * SQS message system attribute value
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_MessageSystemAttributeValue.html MessageSystemAttributeValue}
 */
export type SqsMessageSystemAttributeValue =
  | SqsMessageBinaryAttributeValue
  | SqsMessageNumberAttributeValue
  | SqsMessageStringAttributeValue;
