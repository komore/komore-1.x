import { type EsbuildClient } from '@komore/esbuild';
import { type MediaType } from '@komore/http';
import { type HttpServerLocalFile } from '@komore/http/server';
import { pathToExtension } from '@komore/node/file-system';
import { of } from '@komore/reactive';
import { type TypeScriptConfiguration } from '@komore/typescript-compiler';

import { typeScriptFileToBrowserServerEsModule } from '../typescript/typescript-file-to-browser-server-es-module';

export function browserServerFilePathToLocalFile(
  esbuildClient: EsbuildClient,
  typeScriptConfiguration: TypeScriptConfiguration
): (filePath: string) => Observable<HttpServerLocalFile> {
  const generateBrowserServerEsModuleFromTypeScript = typeScriptFileToBrowserServerEsModule(
    esbuildClient,
    typeScriptConfiguration
  );
  const mediaTypeByExtension: ReadonlyMap<string, MediaType> = new Map([
    ['css', 'text/css'],
    ['html', 'text/html'],
    ['js', 'text/javascript'],
    ['svg', 'image/svg+xml'],
  ]);
  // TODO: observable map for caching

  return filePath => {
    const fileExtension = pathToExtension(filePath).substring(1);
    return fileExtension === 'ts'
      ? generateBrowserServerEsModuleFromTypeScript(filePath)
      : of({
          filePath,
          mediaType: mediaTypeByExtension.get(fileExtension) ?? 'text/plain',
        });
  };
}
