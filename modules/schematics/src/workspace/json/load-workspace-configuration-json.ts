import { join } from 'node:path';

import { createJsonSchemaValidator, jsonToObject, type JsonSchemaDefinition } from '@komore/json';
import { readFileContent } from '@komore/node/file-system';
import { forkJoin, map, switchMap, type Observable, cache } from '@komore/reactive';
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
  const validateWith$ = createJsonSchemaValidator<WorkspaceConfigurationJson>({
    /*TODO*/
  } as JsonSchemaDefinition).pipe(
    map(schemaValidator => validateWith(schemaValidator)),
    cache()
  );

  const workspaceConfigurationJson$ = readFileContent(workspaceConfigurationPath, { encoding: 'utf-8' }).pipe(
    map(jsonToObject())
  );
  return forkJoin([workspaceConfigurationJson$, validateWith$]).pipe(
    switchMap(([json, validateWith]) => validateWith(json))
  );
}
