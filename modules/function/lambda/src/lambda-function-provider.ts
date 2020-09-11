import { FunctionEnvironment, FunctionProvider } from '@komore/function';
import { functionProviderName } from './lambda';
import { LambdaFunctionInput } from './lambda-function-input';
import { LambdaFunctionOutput } from './lambda-function-output';
import { LambdaMessage } from './lambda-message';

/**
 * Lambda function provider
 */
export class LambdaFunctionProvider implements FunctionProvider<[LambdaFunctionInput], [LambdaFunctionOutput], [LambdaMessage]> {
  /**
   * Gets the provider name
   * @returns Provider name
   */
  getProviderName(): string {
    return functionProviderName;
  }

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
  canHandle(functionArguments: ReadonlyArray<any>): boolean {
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
  buildFunctionOutput<R>(result: R): LambdaFunctionOutput {
    return undefined as any;
  }

  /**
   * Builds an error function output
   * @param error Error
   * @returns Function output
   * @template E Error type
   */
  buildErrorFunctionOutput<E extends Error>(error: E): LambdaFunctionOutput {
    return undefined as any;
  }
}

/**
 * Creates a Lambda function provider
 * @returns Lambda function provider
 */
export function lambdaFunctionProvider(): LambdaFunctionProvider {
  return new LambdaFunctionProvider();
}
