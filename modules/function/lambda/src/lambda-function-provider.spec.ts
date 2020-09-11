import { functionProviderName } from './lambda';
import { LambdaFunctionProvider } from './lambda-function-provider';

/**
 * Lambda function provider specification
 */
describe('Lambda function provider', () => {
  let lambdaFunctionProvider: LambdaFunctionProvider;

  beforeEach(() => {
    lambdaFunctionProvider = new LambdaFunctionProvider();
  });

  it('returns the correct provider name', () => {
    // when: getting the provider name
    const providerName = lambdaFunctionProvider.getProviderName();
    // then: the correct provider name is returned
    expect(providerName).toBe(functionProviderName);
  })
});
