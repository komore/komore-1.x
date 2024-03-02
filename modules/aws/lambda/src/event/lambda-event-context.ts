import { type LambdaFunctionArn } from '@komore/aws/lambda';

import { type LambdaEventClientContext } from './lambda-event-client-context';
import { type LambdaEventCognitoIdentity } from './lambda-event-cognito-identity';

/**
 * Lambda event context
 */
export interface LambdaEventContext {
  readonly awsRequestId: string;
  readonly callbackWaitsForEmptyEventLoop: boolean;
  readonly clientContext?: LambdaEventClientContext;
  readonly functionName: string;
  readonly functionVersion: string;
  readonly identity?: LambdaEventCognitoIdentity;
  readonly invokedFunctionArn: LambdaFunctionArn;
  readonly logGroupName: string;
  readonly logStreamName: string;
  readonly memoryLimitInMB: string;
  getRemainingTimeInMillis(): number;
}
