import { type SqsQueueArn } from '@komore/aws/sqs';
import { type LambdaFunctionArn } from '@komore/aws/lambda';
import { type UrlString } from '@komore/url';

/**
 * SNS subscription endpoint by protocol
 */
export interface SnsSubscriptionEndpointByProtocol {
  application: unknown; // TODO: endpoint ARN
  email: string; // TODO: typed from @komore/email?
  'email-json': string; // TODO: typed from @komore/email?
  firehose: string; // TODO: Kinesis data firehose delivery stream ARN
  http: UrlString;
  https: UrlString;
  lambda: LambdaFunctionArn;
  sms: string; // TODO: typed?
  sqs: SqsQueueArn;
}
