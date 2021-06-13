import type { LambdaCognitoIdentity } from './lambda-cognito-identity';

/**
 * Lambda event context
 */
export interface LambdaEventContext {
  readonly awsRequestId: string;
  readonly callbackWaitsForEmptyEventLoop: boolean;
  readonly clientContext?: LambdaClientContext;
  readonly functionName: string;
  readonly functionVersion: string;
  readonly identity?: LambdaCognitoIdentity;
  readonly invokedFunctionArn: string;
  readonly logGroupName: string;
  readonly logStreamName: string;
  readonly memoryLimitInMB: string;
  getRemainingTimeInMillis(): number;
}

/**
 * Lambda client context
 */
export interface LambdaClientContext {
  readonly client: LambdaClientContextClient;
  readonly Custom?: unknown;
  readonly env: LambdaClientContextEnv;
}

/**
 * Lambda client context client
 */
export interface LambdaClientContextClient {
  readonly appPackageName: string;
  readonly appTitle: string;
  readonly appVersionName: string;
  readonly appVersionCode: string;
  readonly installationId: string;
}

/**
 * Lambda client context environment
 */
export interface LambdaClientContextEnv {
  readonly locale: string;
  readonly make: string;
  readonly model: string;
  readonly platform: string;
  readonly platformVersion: string;
}
