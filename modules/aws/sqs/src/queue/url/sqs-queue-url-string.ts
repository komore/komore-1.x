import { type UrlString } from '@komore/url';

/**
 * Sqs queue URL string
 */
export type SqsQueueUrlString = UrlString & {
  readonly __tag_awsSqsQueueUrlString: unique symbol;
};
