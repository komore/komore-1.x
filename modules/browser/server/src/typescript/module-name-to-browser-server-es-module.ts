import { esbuildCommand, type EsbuildClient } from '@komore/esbuild';
import { objectToKeys } from '@komore/functional';
import { type HttpServerLocalFile } from '@komore/http/server';
import { map, throwError } from '@komore/reactive';
import { typeScriptConfigurationToPaths, type TypeScriptConfiguration } from '@komore/typescript-compiler';

import { esbuildBuiltEventToHttpServerLocalFile } from './esbuild-built-event-to-http-server-local-file';
import { createBrowserServerEsbuildResolverPlugin } from '../resolver/create-browser-server-esbuild-resolver-plugin';

/**
 * Creates a function that returns an ES module, given a module name
 *
 * @param esbuildClient esbuild client
 * @param typeScriptConfiguration TypeScript configuration
 * @returns Function that returns an ES module, given a module name
 */
export function moduleNameToBrowserServerEsModule(
  esbuildClient: EsbuildClient,
  typeScriptConfiguration: TypeScriptConfiguration
): (moduleName: string) => Observable<HttpServerLocalFile> {
  const paths = typeScriptConfigurationToPaths(typeScriptConfiguration);
  const aliasedModules = objectToKeys(paths);
  const resolverPlugin = createBrowserServerEsbuildResolverPlugin(typeScriptConfiguration);
  return moduleName => {
    const path = paths[moduleName];
    if (path === undefined) {
      console.log('not a tsconfig alias');
      return throwError(() => new Error(`module "${moduleName}" has no tsconfig path alias`));
    }

    console.log(`loading "${moduleName}" from "${path}"...`);
    const isWebWorker = moduleName === '@komore/website/search/worker';
    const external = isWebWorker ? [] : [...aliasedModules];
    const plugins = isWebWorker ? [resolverPlugin] : [];
    return esbuildClient(
      esbuildCommand.build({
        bundle: true,
        entryPoints: [path],
        format: 'esm',
        absWorkingDir: 'c:/git/komore/komore',
        //logLevel: 'silent',
        sourcemap: 'inline',
        target: ['es2022'], // TODO: read from options
        tsconfigRaw: typeScriptConfiguration,
        external,
        plugins,
        write: false,
      })
    ).pipe(map(esbuildBuiltEventToHttpServerLocalFile()));
  };
}
