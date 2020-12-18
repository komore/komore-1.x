import { mock } from 'jest-mock-extended';
import { FunctionProvider } from './function-provider';
import { selectFunctionProvider } from './select-function-provider';

describe('Select function provider', () => {
  const canHandleProvider = mock<FunctionProvider<any, any>>();
  const canHandleProvider2 = mock<FunctionProvider<any, any>>();
  const cantHandleProvider = mock<FunctionProvider<any, any>>();

  beforeEach(() => {
    canHandleProvider.canHandle.mockReturnValueOnce(true);
    canHandleProvider2.canHandle.mockReturnValueOnce(true);
    cantHandleProvider.canHandle.mockReturnValueOnce(false);
  });

  it('selects the first provider that can handle the function arguments', () => {
    // given: a list of providers
    const availableFunctionProviders = [cantHandleProvider, canHandleProvider, cantHandleProvider, canHandleProvider2];
    // when: selecting the function provider
    const selectedFunctionProvider = selectFunctionProvider(availableFunctionProviders, []);
    // then: the first function provider that can handle the arguments is returned
    expect(selectedFunctionProvider).toBe(canHandleProvider);
  });

  it('throws when no provide can handle the function arguments', () => {
    // given: a list of providers
    const availableFunctionProviders = [cantHandleProvider, cantHandleProvider];
    // expect: an error to be thrown when no provide can handle the arguments
    expect(selectFunctionProvider(availableFunctionProviders, [])).toThrowError(
      'no function provider can handle the function arguments'
    );
  });
});
