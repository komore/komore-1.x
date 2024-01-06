import { build } from 'esbuild';

import { deferPromise, map, tapNext, type Observable } from '@komore/reactive';
import { toWorkspaceExecutorTaskMessageEvent, type GenericWorkspaceExecutorEvent } from '@komore/schematics';

import { type BuildNodeModuleOptions } from './build-node-module-options';

/**
 * Builds a Node module
 *
 * @param options Build module options
 * @returns
 */
export function buildNodeModule(options: BuildNodeModuleOptions): Observable<GenericWorkspaceExecutorEvent> {
  const { paths, taskId } = options;
  const { entryPoint, outputPath: outdir, tsConfig: tsconfig } = paths;
  const format = 'esm';
  const target = ['es2021', 'node20']; // TODO: read from tsconfig?
  return deferPromise(() => {
    console.log('entrypoints', [entryPoint], format, outdir, target, tsconfig);
    return build({
      entryPoints: [entryPoint],
      format,
      outdir,
      target,
      tsconfig,
    });
  }).pipe(
    tapNext(x => console.log('build result', x)),
    map(toWorkspaceExecutorTaskMessageEvent(taskId, 'meeeh done'))
  );
}
