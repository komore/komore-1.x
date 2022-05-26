import { createJsonSchemaValidator, jsonToObject, type JsonSchemaDefinition } from '@komore/json';
import { forkJoin, map, switchMap, type Observable } from '@komore/reactive';
import { readFileContent } from '@komore/runtime/node';
import { validateWith } from '@komore/validation';
import { join } from 'path';
import { type JsonWorkspaceConfiguration } from './json-workspace-configuration';

/**
 * Loads a JSON workspace configuration
 *
 * @param workspacePath Workspace path
 * @returns Workspace configuration
 */
export function loadJsonWorkspaceConfiguration(workspacePath: string): Observable<JsonWorkspaceConfiguration> {
  const workspaceConfigurationPath = join(workspacePath, 'k.json');
  return forkJoin([
    readFileContent(workspaceConfigurationPath, 'utf-8').pipe(map(jsonToObject())),
    createJsonSchemaValidator<JsonWorkspaceConfiguration>({
      /*TODO*/
    } as JsonSchemaDefinition).pipe(map(schemaValidator => validateWith(schemaValidator))),
  ]).pipe(switchMap(([json, validateWith]) => validateWith(json)));
}
