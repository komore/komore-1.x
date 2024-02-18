import { version } from 'esbuild';

import { of } from '@komore/reactive';

import { type EsbuildCliClient } from '../esbuild-cli-client';

/**
 * Creates a function that returns the esbuild version
 *
 * @param cliClient esbuild CLI client
 * @returns Function that returns the esbuild version
 */
export function getEsbuildVersion(_cliClient: EsbuildCliClient): () => Observable<string> {
  const version$ = of(version);
  return () => version$;
}
