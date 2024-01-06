import { jsonToObject } from '@komore/json';
import { readFileContent } from '@komore/node/file-system';
import { map, type Observable } from '@komore/reactive';

import { type TypeScriptConfigurationJson } from './json/typescript-configuration-json';
import { typeScriptConfigurationJsonToUnresolvedTypeScriptConfiguration } from './json/typescript-configuration-json-to-unresolved-typescript-configuration';
import { type TypeScriptConfiguration } from './typescript-configuration';

export function loadExtendedTypeScriptConfiguration(filePath: string): Observable<TypeScriptConfiguration> {
  return readFileContent(filePath, { encoding: 'utf-8' }).pipe(
    map(jsonToObject<TypeScriptConfigurationJson>()),
    map(typeScriptConfigurationJsonToUnresolvedTypeScriptConfiguration)
  );
}
