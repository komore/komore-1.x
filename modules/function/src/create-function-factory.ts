import { FunctionConfiguration } from './function-configuration';
import { FunctionFactory } from './function-factory';
import {
  FunctionProvider,
  FunctionProviderFunctionInputType,
  FunctionProviderFunctionOutputType,
  FunctionProviderMessageType
} from './function-provider';

/**
 * Creates a function factory
 * @param functionConfiguration Function configuration
 */
export function createFunctionFactory<FP extends FunctionProvider<any, any, any>[] | any[]>(
  functionConfiguration: FunctionConfiguration<FP>
): FunctionFactory<
  FunctionProviderFunctionInputType<FP>,
  FunctionProviderFunctionOutputType<FP>,
  FunctionProviderMessageType<FP>
> {
  const functionFactory = () => {
      
  }
  return undefined as any;
}
