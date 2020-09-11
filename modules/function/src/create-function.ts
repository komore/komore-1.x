import { Subject } from 'rxjs';
import { Message } from './message';
import { Function } from './function';
import { FunctionConfiguration } from './function-configuration';
import { FunctionProvider, FunctionProviderMessageType } from './function-provider';
import { PipeableFunction } from './pipeable-function';

/**
 * Creates a function
 * @param functionConfiguration Function configuration
 * @returns Function
 * @template M Message type
 * @template FP Function provider types
 * @template R Result type
 */
export function createFunction<M extends Message<any, any>[], FP extends FunctionProvider<any, any, M>[], R>(functionConfiguration: FunctionConfiguration<FP>): PipeableFunction<M, R> {
  const providers = functionConfiguration.providers;
  const availableProviders = providers.filter(provider => provider.isAvailable());
  if (availableProviders.length === 0) {
    throw new Error('no available function providers, potential candidates: ' + )
  }

  const observable = new Subject<FunctionProviderMessageType<M>>();

  async function func(...functionArguments: ReadonlyArray<any>): Promise<any> {
    const provider = availableProviders.find(provider => provider.canHandle(functionArguments));
    if (provider === undefined) {
      throw new Error('no function provider can handle available')
    }

    try {
      const message = provider.buildMessage(functionArguments);
      return provider.buildResult(result);
  };

  Object.defineProperties(func, Object.getOwnPropertyDescriptors(observable));

  return Object.defineProperty(func, 'name', {
    value: functionConfiguration.name,
    writable: false
  });
}
