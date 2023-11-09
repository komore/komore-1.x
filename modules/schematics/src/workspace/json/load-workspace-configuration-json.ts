import { join } from 'path';

import { createJsonSchemaValidator, jsonToObject, type JsonSchemaDefinition } from '@komore/json';
import { readFileContent } from '@komore/node/file-system';
import { forkJoin, map, switchMap, type Observable } from '@komore/reactive';
import { validateWith } from '@komore/validation';

import { type WorkspaceConfigurationJson } from './workspace-configuration-json';

/**
 * Loads a JSON workspace configuration
 *
 * @param workspacePath Workspace path
 * @returns Workspace configuration
 */
export function loadWorkspaceConfigurationJson(workspacePath: string): Observable<WorkspaceConfigurationJson> {
  const workspaceConfigurationPath = join(workspacePath, 'k.json');
  return forkJoin([
    readFileContent(workspaceConfigurationPath, 'utf-8').pipe(map(jsonToObject())),
    createJsonSchemaValidator<WorkspaceConfigurationJson>({
      /*TODO*/
    } as JsonSchemaDefinition).pipe(map(schemaValidator => validateWith(schemaValidator))),
  ]).pipe(switchMap(([json, validateWith]) => validateWith(json)));
}
