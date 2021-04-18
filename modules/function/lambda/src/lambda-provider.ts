import type { FunctionEnvironment, FunctionProvider } from '@komore/function';
import { lambdaProviderName } from './lambda';
import { LambdaFunctionInput } from './lambda-function-input';
import { LambdaFunctionOutput } from './lambda-function-output';
import { LambdaFunctionTypes } from './lambda-function-types';

/**
 * Lambda function provider
 */
export class LambdaProvider implements FunctionProvider<LambdaFunctionTypes[number]> {
  readonly name = lambdaProviderName;

  /**
   * Tests whether the provider is available
   * @returns true if the provider is available
   */
  isAvailable(): boolean {
    return process.env.AWS_REGION !== undefined;
  }

  /**
   * Tests whether the provider can handle the function call
   * @param functionArguments Function arguments
   * @returns true if the provider can handle the function call
   */
  canHandle(functionArguments: ReadonlyArray<unknown>): boolean {
    return false;
  }

  /**
   * Gets the function environment
   * @returns Function environment
   */
  getFunctionEnvironment(): FunctionEnvironment {
    return {
      functionName: process.env.AWS_LAMBDA_FUNCTION_NAME,
      functionVersion: process.env.AWS_LAMBDA_FUNCTION_VERSION,
      memorySize: parseInt(process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE, 10),
      provider: this,
      region: process.env.AWS_REGION
    };
  }

  /**
   * Builds a message
   * @param functionInput Function input
   * @returns Message
   */
  buildMessage(functionInput: LambdaFunctionInput): LambdaMessage {
    return undefined as any;
  }

  /**
   * Builds a function output
   * @param result Result
   * @returns Function output
   * @template R Result type
   */
  buildFunctionOutput<ResultType>(result: ResultType): LambdaFunctionOutput {
    return undefined as any;
  }

  /**
   * Builds an error function output
   * @param error Error
   * @returns Function output
   * @template E Error type
   */
  buildErrorFunctionOutput<ErrorType extends Error>(error: ErrorType): LambdaFunctionOutput {
    return undefined as any;
  }
}

/**
 * Creates a Lambda provider
 * @returns Lambda provider
 */
export function lambdaProvider<ProviderTypeNames extends string[]>(providerTypes: ProviderTypeNames): LambdaProvider {
  return new LambdaProvider();
}
