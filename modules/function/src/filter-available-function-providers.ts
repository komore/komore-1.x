import { FunctionProvider } from './function-provider';

/**
 * Filters the available function providers
 * @param functionProviders Function providers
 * @returns Available function providers
 * @tempalte FunctionProviderTypes Function provider types
 */
export function filterAvailableFunctionProviders<FunctionProviderTypes extends FunctionProvider<any, any>[]>(
  functionProviders: FunctionProviderTypes
): FunctionProviderTypes {
  if (functionProviders.length === 0) {
    throw new Error('no available function providers, add a @komore/function-* dependency to your project');
  }

  const availableProviders = functionProviders.filter(provider => provider.isAvailable());
  if (availableProviders.length === 0) {
    const potentialCandidates = functionProviders.map(({ name }) => name).join(', ');
    throw new Error('no available function providers, potential candidates: ' + potentialCandidates);
  }

  return availableProviders as FunctionProviderTypes;
}
