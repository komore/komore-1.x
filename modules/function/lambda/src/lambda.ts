/**
 * Variables available on Lambda host environments
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AWS_ACCESS_KEY_ID: string;
      AWS_EXECUTION_ENV: string;
      AWS_LAMBDA_FUNCTION_NAME: string;
      AWS_LAMBDA_FUNCTION_MEMORY_SIZE: string;
      AWS_LAMBDA_FUNCTION_VERSION: string;
      AWS_LAMBDA_LOG_GROUP_NAME: string;
      AWS_LAMBDA_LOG_STREAM_NAME: string;
      AWS_LAMBDA_RUNTIME_API: string;
      AWS_REGION: string;
      AWS_SECRET_ACCESS_KEY: string;
      AWS_SESSION_TOKEN: string;
      LAMBDA_TASK_ROOT: string;
      LAMBDA_RUNTIME_DIR: string;
      TZ: string;
    }
  }
}

/**
 * Lambda constants
 */
export const lambdaProviderName = 'aws:lambda' as const;
export const apiGatewayHttpMessageType = 'aws:api-gateway:http' as const;
export const apiGatewayMessageType = 'aws:api-gateway' as const;
export const dynamoDBEventType = 'aws:dynamodb' as const;
export const dynamoDBMessageType = 'aws:dynamodb' as const;
export const kinesisEventType = 'aws:kinesis' as const;
export const kinesisMessageType = 'aws:kinesis' as const;
export const s3EventType = 'aws:s3' as const;
export const s3MessageType = 'aws:s3' as const;
export const sesEventType = 'aws:ses' as const;
export const sesMessageType = 'aws:ses' as const;
export const snsEventType = 'aws:sqs' as const;
export const snsMessageType = 'aws:sqs' as const;
export const sqsEventType = 'aws:sqs' as const;
export const sqsMessageType = 'aws:sqs' as const;
