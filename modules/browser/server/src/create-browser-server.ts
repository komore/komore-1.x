import { resolve } from 'node:path';

import { isErrorOfType } from '@komore/error';
import { createEsbuildClient } from '@komore/esbuild';
import { createHttpServer, httpServerRequestToLocalFile, type HttpServerLocalFile } from '@komore/http/server';
import { isPathDirectory, nodeFileSystemError } from '@komore/node/file-system';
import { cache, first, map, mapErrorIf, mergeMap, ObservableMap, tapNext } from '@komore/reactive';
import { loadTypeScriptConfiguration } from '@komore/typescript-compiler';

import { type BrowserServer } from './browser-server';
import { type BrowserServerOptions } from './browser-server-options';
import { browserServerFilePathToLocalFile } from './file/browser-server-file-path-to-local-file';
import { moduleNameToBrowserServerEsModule } from './typescript/module-name-to-browser-server-es-module';

/**
 * Creates a browser server
 *
 * @param serverOptions Browser server options
 * @returns Browser server
 */
export function createBrowserServer(serverOptions: BrowserServerOptions): Observable<BrowserServer> {
  const {
    paths: { indexHtml, rootPath, tsConfigPath },
    ...httpServerOptions
  } = serverOptions;
  const modulesPrefix = '__komore_browser_server__/modules/';
  console.log('root path', rootPath);
  console.log('tsconfig path', tsConfigPath);
  const typeScriptConfiguration$ = loadTypeScriptConfiguration(tsConfigPath).pipe(cache());
  const esbuildClient = createEsbuildClient({});
  const handlers$ = typeScriptConfiguration$.pipe(
    map(typeScriptConfiguration => ({
      toLocalFile: browserServerFilePathToLocalFile(esbuildClient, typeScriptConfiguration),
      cachedModules: new ObservableMap<string, HttpServerLocalFile>(
        moduleNameToBrowserServerEsModule(esbuildClient, typeScriptConfiguration)
      ),
    })),
    cache()
  );

  return createHttpServer({
    ...httpServerOptions,
    handler: request$ =>
      handlers$.pipe(
        first(),
        mergeMap(({ toLocalFile, cachedModules }) =>
          request$.pipe(
            mergeMap(
              httpServerRequestToLocalFile(({ url }) => {
                const path = url.pathname.startsWith('/') ? url.pathname.substring(1) : url.pathname;
                if (path.startsWith(modulesPrefix)) {
                  const packagePath = path.substring(modulesPrefix.length);
                  console.log('getting package from cached modules', packagePath);
                  return cachedModules.get(packagePath);
                }

                const localFilePath = resolve(rootPath, path);

                return isPathDirectory(localFilePath).pipe(
                  map(isDirectory => (isDirectory ? indexHtml : localFilePath)),
                  mergeMap(filePath => toLocalFile(filePath)),
                  mapErrorIf(isErrorOfType(nodeFileSystemError.fileNotFound), () => undefined)
                );
              })
            )
          )
        )
      ),
  }).pipe(tapNext(() => console.log('[HTTP] browser server ready')));
}
