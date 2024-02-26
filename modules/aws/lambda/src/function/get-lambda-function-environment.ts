import { type AwsRegion, asAwsRegion } from '@komore/aws';
import { type FunctionEnvironment } from '@komore/function';
import { getNodeEnvironmentVariables } from '@komore/node/environment';

/**
 * Returns the Lambda function environment
 *
 * @returns Lambda fucntion environment
 */
export function getLambdaFunctionEnvironment(): FunctionEnvironment<typeof environmentType, AwsRegion> {
  return {
    ...getNodeEnvironmentVariables(process.env, {
      functionName: {
        description: 'Lambda function name',
        name: 'AWS_LAMBDA_FUNCTION_NAME',
      },
      functionVersion: {
        description: 'Lambda function version',
        name: 'AWS_LAMBDA_FUNCTION_VERSION',
      },
      memorySize: {
        description: 'Available memory',
        name: 'AWS_LAMBDA_FUNCTION_MEMORY_SIZE',
        parse: Number,
      },
      region: {
        description: 'AWS region where the function is executing',
        name: 'AWS_REGION',
        parse: asAwsRegion,
      },
    }),
    type: environmentType,
  };
}

const environmentType = 'aws:lambda';
