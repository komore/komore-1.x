import { build } from 'esbuild';

import { first, fromPromise, mergeMap } from '@komore/reactive';

import { esbuildCliClientSymbol, type EsbuildCliClient } from '../esbuild-cli-client';
import { type EsbuildBuildParameters } from './esbuild-build-parameters';
import { type EsbuildBuildResult } from './esbuild-build-result';

export function esbuildBuild(
  cliClient: EsbuildCliClient
): (parameters: EsbuildBuildParameters) => Observable<EsbuildBuildResult> {
  const { initialized$, workingDirectory } = cliClient[esbuildCliClientSymbol];
  return parameters =>
    initialized$.pipe(
      first(),
      mergeMap(() => fromPromise(build({ ...parameters, absWorkingDir: workingDirectory })))
    );
}
