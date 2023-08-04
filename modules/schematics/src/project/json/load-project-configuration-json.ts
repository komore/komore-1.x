import { jsonToObject } from '@komore/json';
import { readFileContent } from '@komore/node';
import { forkJoin, map, switchMap, take, type Observable } from '@komore/reactive';
import { validateWith } from '@komore/validation';

import { type ProjectConfigurationJson } from './project-configuration-json';
import { projectConfigurationJsonSchemaValidator$ } from './project-configuration-json-schema-validator';

/**
 * Loads a JSON project configuration
 *
 * @param configurationPath Configuration path
 * @returns Project configuration
 */
export function loadProjectConfigurationJson(configurationPath: string): Observable<ProjectConfigurationJson> {
  return forkJoin([
    readFileContent(configurationPath, 'utf-8').pipe(map(jsonToObject())),
    projectConfigurationJsonSchemaValidator$.pipe(
      take(1),
      map(schemaValidator => validateWith(schemaValidator))
    ),
  ]).pipe(switchMap(([json, validateWith]) => validateWith(json)));
}
