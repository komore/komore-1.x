import { Message } from '@komore/message';
import { FunctionInputType, FunctionOutputType, FunctionType } from './function-type';

/**
 * Function provider
 * @template FunctionTypes Function types
 */
export interface FunctionProvider<
  FunctionTypes extends FunctionType<any, any>[],
  MessageType extends Message<any, any, any, any>[]
> {
  readonly name: string;

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
  canHandle(functionArguments: ReadonlyArray<unknown>): boolean;

  /**
   * Builds a message
   * @param functionArguments Function input
   * @returns Message
   */
  buildMessage<FunctionType extends FunctionTypes[number]>(
    functionArguments: FunctionInputType<FunctionType>
  ): MessageType[number];

  /**
   * Builds a function output
   * @param result Result
   * @returns Function output
   * @template ResultType Result type
   */
  buildFunctionOutput<ResultType>(result: ResultType): FunctionOutputType<FunctionTypes[number]>;

  /**
   * Builds an error function output
   * @param error Error
   * @returns Function output
   * @template E Error type
   */
  buildErrorFunctionOutput<E extends Error>(error: E): FunctionOutputType<FunctionTypes[number]>;
}

export type FunctionProviderFunctionTypes<FunctionProviderType> = FunctionProviderType extends FunctionProvider<
  infer FunctionTypes,
  any
>
  ? FunctionTypes
  : never;
