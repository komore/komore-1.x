import { FunctionProvider } from './function-provider';

/**
 * Selects a function provider that can handle a call, from a list of available function providers
 * @param availableFunctionProviders Available function providers
 * @param functionArguments Function arguments
 * @returns Function provider
 * @template FunctionProviderTypes Function provider types
 */
export function selectFunctionProvider<FunctionProviderTypes extends FunctionProvider<any, any>[]>(
  availableFunctionProviders: FunctionProviderTypes,
  functionArguments: ReadonlyArray<unknown>
): FunctionProviderTypes[number] {
  const functionProvider = availableFunctionProviders.find(potentialFunctionProvider =>
    potentialFunctionProvider.canHandle(functionArguments)
  );

  if (functionProvider === undefined) {
    throw new Error('no function provider can handle the function arguments');
  }

  return functionProvider;
}
