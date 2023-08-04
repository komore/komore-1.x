import { build } from 'esbuild';

import { deferPromise, type Observable } from '@komore/reactive';

import { type BuildModuleOptions } from './build-module-options';

/**
 * Builds a module
 *
 * @param options Build module options
 * @returns
 */
export function buildModule(options: BuildModuleOptions): Observable<unknown> {
  const { paths } = options;
  const { entryPoint, output: outdir, tsConfig: tsconfig } = paths;
  return deferPromise(() => {
    return build({
      entryPoints: [entryPoint],
      format: 'esm',
      outdir,
      target: ['es2021', 'node20'],
      tsconfig,
    });
  });
}
