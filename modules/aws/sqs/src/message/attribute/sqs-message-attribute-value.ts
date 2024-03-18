import { type SqsMessageBinaryAttributeValue } from './sqs-message-binary-attribute-value';
import { type SqsMessageNumberAttributeValue } from './sqs-message-number-attribute-value';
import { type SqsMessageStringAttributeValue } from './sqs-message-string-attribute-value';

/**
 * SQS message attribute value
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_MessageAttributeValue.html MessageAttributeValue}
 */
export type SqsMessageAttributeValue =
  | SqsMessageBinaryAttributeValue
  | SqsMessageNumberAttributeValue
  | SqsMessageStringAttributeValue;
