import { type FunctionEnvironment } from '@komore/function';

import { lambdaEnvironmentType } from './lambda';

/**
 * Returns the Lambda function environment
 *
 * @returns Lambda fucntion environment
 */
export function getLambdaFunctionEnvironment(): FunctionEnvironment {
  const functionName = process.env.AWS_LAMBDA_FUNCTION_NAME;
  const functionVersion = process.env.AWS_LAMBDA_FUNCTION_VERSION;
  const memorySize = parseInt(process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE, 10);
  const region = process.env.AWS_REGION;
  const type = lambdaEnvironmentType;
  return {
    functionName,
    functionVersion,
    memorySize,
    region,
    type,
  };
}
