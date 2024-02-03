import { jsonToObject } from '@komore/json';
import { readFileContent } from '@komore/node/file-system';
import { first, forkJoin, map, switchMap } from '@komore/reactive';
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
    readFileContent(configurationPath, { encoding: 'utf-8' }).pipe(map(jsonToObject())),
    projectConfigurationJsonSchemaValidator$.pipe(
      first(),
      map(schemaValidator => validateWith(schemaValidator))
    ),
  ]).pipe(switchMap(([json, validate]) => validate(json)));
}
