import { esbuildCommand, type EsbuildClient } from '@komore/esbuild';
import { type HttpServerLocalFile } from '@komore/http/server';
import { map } from '@komore/reactive';
import { type TypeScriptConfiguration } from '@komore/typescript-compiler';

import { esbuildBuiltEventToHttpServerLocalFile } from './esbuild-built-event-to-http-server-local-file';

//import { createBrowserServerEsbuildResolverPlugin } from '../resolver/create-browser-server-esbuild-resolver-plugin';

export function typeScriptFileToBrowserServerEsModule(
  esbuildClient: EsbuildClient,
  typeScriptConfiguration: TypeScriptConfiguration
): (filePath: string) => Observable<HttpServerLocalFile> {
  //const resolverPlugin = createBrowserServerEsbuildResolverPlugin();
  return filePath => {
    console.log('gotta go with', filePath);
    return esbuildClient(
      esbuildCommand.build({
        entryPoints: [filePath],
        format: 'esm',
        sourcemap: 'inline',
        target: ['es2022'], // TODO: read from options
        tsconfigRaw: typeScriptConfiguration,
        plugins: [
          /*resolverPlugin*/
        ],
        write: false,
      })
    ).pipe(map(esbuildBuiltEventToHttpServerLocalFile()));
  };
}
