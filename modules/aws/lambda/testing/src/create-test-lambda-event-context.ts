import { type LambdaEventContext } from '@komore/aws/lambda';

import { createTestLambdaEventClientContext } from './create-test-lambda-event-client-context';
import { createTestLambdaEventCognitoIdentity } from './create-test-lambda-event-cognito-identity';
import { generateTestLambdaFunctionArn } from './generate-test-lambda-function-arn';

/**
 * Creates a test Lambda event context
 *
 * @param eventContext Event context
 * @returns Test Lambda event context
 */
export function createTestLambdaEventContext(eventContext?: Partial<LambdaEventContext>): LambdaEventContext {
  const awsRequestId = eventContext?.awsRequestId ?? 'test-aws-request-id';
  const callbackWaitsForEmptyEventLoop = eventContext?.callbackWaitsForEmptyEventLoop ?? true;
  const clientContext = createTestLambdaEventClientContext(eventContext?.clientContext);
  const functionName = eventContext?.functionName ?? 'test-function-name';
  const functionVersion = eventContext?.functionVersion ?? '1';
  const identity = createTestLambdaEventCognitoIdentity(eventContext?.identity);
  const invokedFunctionArn = eventContext?.invokedFunctionArn ?? generateTestLambdaFunctionArn();
  const logGroupName = eventContext?.logGroupName ?? `/aws/lambda/${functionName}`;
  const logStreamName = eventContext?.logStreamName ?? `test-log-stream-${functionName}`;
  const memoryLimitInMB = eventContext?.memoryLimitInMB ?? '128';
  const getRemainingTimeInMillis = eventContext?.getRemainingTimeInMillis ?? (() => 1000);
  return {
    awsRequestId,
    callbackWaitsForEmptyEventLoop,
    clientContext,
    functionName,
    functionVersion,
    identity,
    invokedFunctionArn,
    logGroupName,
    logStreamName,
    memoryLimitInMB,
    getRemainingTimeInMillis,
  };
}
