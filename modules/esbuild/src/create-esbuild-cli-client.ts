import { initialize } from 'esbuild';

import { cache, deferPromise } from '@komore/reactive';

import { esbuildCliClientSymbol, type EsbuildCliClient } from './esbuild-cli-client';
import { type EsbuildCliClientOptions } from './esbuild-cli-client-options';

/**
 * Creates an esbuild CLI client
 *
 * @param clientOptions esbuild CLI client options
 * @returns esbuild CLI client
 */
export function createEsbuildCliClient(clientOptions: EsbuildCliClientOptions): EsbuildCliClient {
  const { workingDirectory } = clientOptions;
  const initialized$ = deferPromise(() => initialize({})).pipe(cache());

  return {
    [esbuildCliClientSymbol]: {
      initialized$,
      workingDirectory,
    },
  };
}
