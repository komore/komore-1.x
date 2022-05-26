import { deferPromise, type Observable } from '@komore/reactive';
import { build } from 'esbuild';
import { type BuildModuleOptions } from './build-module-options';

/**
 * Builds a module
 *
 * @param options Build module options
 * @returns
 */
export function buildModule(options: BuildModuleOptions): Observable<unknown> {
  const { paths } = options;
  return deferPromise(() => {
    return build({
      entryPoints: [paths.entryPoint],
      format: 'cjs',
      outdir: paths.output,
      target: ['es2020', 'node16'],
      tsconfig: paths.tsConfig,
    });
  });
}
