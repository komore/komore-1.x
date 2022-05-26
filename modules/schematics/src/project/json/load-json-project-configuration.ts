import { jsonToObject } from '@komore/json';
import { forkJoin, map, switchMap, take, type Observable } from '@komore/reactive';
import { readFileContent } from '@komore/runtime/node';
import { validateWith } from '@komore/validation';
import { type JsonProjectConfiguration } from './json-project-configuration';
import { jsonProjectConfigurationSchemaValidator$ } from './json-project-configuration-schema-validator';

/**
 * Loads a JSON project configuration
 *
 * @param configurationPath Configuration path
 * @returns Project configuration
 */
export function loadJsonProjectConfiguration(configurationPath: string): Observable<JsonProjectConfiguration> {
  return forkJoin([
    readFileContent(configurationPath, 'utf-8').pipe(map(jsonToObject())),
    jsonProjectConfigurationSchemaValidator$.pipe(
      take(1),
      map(schemaValidator => validateWith(schemaValidator))
    ),
  ]).pipe(switchMap(([json, validateWith]) => validateWith(json)));
}
