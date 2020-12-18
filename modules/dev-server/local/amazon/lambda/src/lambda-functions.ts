import { LambdaFunction } from './lambda-function';

/**
 * Lambda function map
 */
export const lambdaFunctions = new Map<string, LambdaFunction>();

export function getLambdaFunction(functionNameOrArn: string): LambdaFunction | undefined {
  return lambdaFunctions.get(functionNameOrArn);
}
