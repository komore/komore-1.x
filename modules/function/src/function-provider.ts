import { FunctionEnvironment } from './function-environment';
import { FunctionInput } from './function-input';
import { FunctionOutput } from './function-output';
import { Message } from './message';

/**
 * Function provider
 * @template FI Function input type
 * @template FO Function output type
 * @template M Message type
 */
export interface FunctionProvider<
  FI extends FunctionInput<any, any>[],
  FO extends FunctionOutput<any>[],
  M extends Message<any, any>[]
> {
  /**
   * Gets the provider name
   * @returns Provider name
   */
  getProviderName(): string;

  /**
   * Tests whether the provider is available
   * @returns true if the provider is available
   */
  isAvailable(): boolean;

  /**
   * Tests whether the provider can handle the function call
   * @param functionArguments Function arguments
   * @returns true if the provider can handle the function call
   */
  canHandle(functionArguments: ReadonlyArray<any>): boolean;

  /**
   * Gets the function environment
   * @returns Function environment
   */
  getFunctionEnvironment(): FunctionEnvironment;

  /**
   * Builds a message
   * @param functionInput Function input
   * @returns Message
   */
  buildMessage(functionInput: FI[number]): M;

  /**
   * Builds a function output
   * @param result Result
   * @returns Function output
   * @template R Result type
   */
  buildFunctionOutput<R>(result: R): FO[number];

  /**
   * Builds an error function output
   * @param error Error
   * @returns Function output
   * @template E Error type
   */
  buildErrorFunctionOutput<E extends Error>(error: E): FO[number];
}

export type FunctionProviderFunctionInputType<FP> = FP extends FunctionProvider<infer FI, any, any> ? FI : never;
export type FunctionProviderFunctionOutputType<FP> = FP extends FunctionProvider<any, infer FO, any> ? FO : never;
export type FunctionProviderMessageType<FP> = FP extends FunctionProvider<any, any, infer M> ? M : never;
