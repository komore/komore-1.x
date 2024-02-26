/**
 * Variables available on Lambda host environments
 */
declare global {
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
    }
  }
}

/**
 * Lambda constants
 */
const apiGatewayEventType = 'aws:api-gateway';
const apiGatewayHttpApiEventType = 'aws:api-gateway:http';
const cognitoEventType = 'aws:cognito';
const dynamoDBEventType = 'aws:dynamodb';
const kinesisEventType = 'aws:kinesis';
const kinesisFirehoseEventType = 'aws:kinesis';
const s3EventType = 'aws:s3';
const sesEventType = 'aws:ses';
const snsEventType = 'aws:sns';
