/**
 * Variables available on Lambda host environments
 */
declare global {
  // TODO: remove the disabled rule once https://github.com/typescript-eslint/typescript-eslint/pull/2238 works
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      readonly AWS_ACCESS_KEY_ID: string;
      readonly AWS_EXECUTION_ENV: string;
      readonly AWS_LAMBDA_FUNCTION_NAME: string;
      readonly AWS_LAMBDA_FUNCTION_MEMORY_SIZE: string;
      readonly AWS_LAMBDA_FUNCTION_VERSION: string;
      readonly AWS_LAMBDA_LOG_GROUP_NAME: string;
      readonly AWS_LAMBDA_LOG_STREAM_NAME: string;
      readonly AWS_LAMBDA_RUNTIME_API: string;
      readonly AWS_REGION: string;
      readonly AWS_SECRET_ACCESS_KEY: string;
      readonly AWS_SESSION_TOKEN: string;
      readonly LAMBDA_TASK_ROOT: string;
      readonly LAMBDA_RUNTIME_DIR: string;
      readonly TZ: string;
    }
  }
}

/**
 * Lambda constants
 */
export const apiGatewayEventType = 'aws:api-gateway';
export const apiGatewayHttpApiEventType = 'aws:api-gateway:http';
export const cognitoEventType = 'aws:cognito';
export const dynamoDBEventType = 'aws:dynamodb';
export const kinesisEventType = 'aws:kinesis';
export const kinesisFirehoseEventType = 'aws:kinesis';
export const lambdaEnvironmentType = 'aws:lambda';
export const s3EventType = 'aws:s3';
export const sesEventType = 'aws:ses';
export const snsEventType = 'aws:sns';
export const sqsEventType = 'aws:sqs';
