/**
 * Variables available on AWS host environments
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
 * Function provider name
 */
export const functionProviderName = 'aws:lambda';
