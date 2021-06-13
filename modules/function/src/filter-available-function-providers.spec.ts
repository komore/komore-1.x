import { filterAvailableFunctionProviders } from './filter-available-function-providers';
import type { FunctionProvider } from './function-provider';
import { mock } from 'jest-mock-extended';

describe('Filter available function providers', () => {
  const availableProvider = mock<FunctionProvider<any, any>>();
  const availableProvider2 = mock<FunctionProvider<any, any>>();
  const unavailableProvider = mock<FunctionProvider<any, any>>();

  beforeEach(() => {
    availableProvider.isAvailable.mockReturnValueOnce(true);
    (availableProvider as any).name = 'available';
    availableProvider2.isAvailable.mockReturnValueOnce(true);
    (availableProvider2 as any).name = 'available2';
    unavailableProvider.isAvailable.mockReturnValueOnce(false);
    (unavailableProvider as any).name = 'unavailable';
  });

  it('filters based on the availability', () => {
    // given: a list with available and unavailable providers
    const functionProviders = [
      unavailableProvider,
      availableProvider,
      unavailableProvider,
      availableProvider2,
      unavailableProvider
    ];
    // when: filtering available providers
    const availableProviders = filterAvailableFunctionProviders(functionProviders);
    // then: only the available providers are returned
    expect(availableProviders.length).toBe(2);
    expect(availableProviders[0]).toBe(availableProvider);
    expect(availableProviders[1]).toBe(availableProvider2);
  });

  it('throws when no providers are present', () => {
    // expect: an error to be thrown when filtering an empty list
    expect(() => filterAvailableFunctionProviders([])).toThrowError(
      'no available function providers, add a @komore/function-* dependency to your project'
    );
  });

  it('throws when no providers are available', () => {
    const unavailableName = unavailableProvider.name;
    // expect: an error to be thrown when filtering a list with no available providers
    expect(() => filterAvailableFunctionProviders([unavailableProvider, unavailableProvider])).toThrowError(
      `no available function providers, potential candidates: ${unavailableName}, ${unavailableName}`
    );
  });
});
