import { isErrorOfType } from '@komore/error';
import { objectToEntries } from '@komore/functional';
import { jsonToObject } from '@komore/json';
import { nodeFileSystemError, readFileContent } from '@komore/node/file-system';
import { map, mapEach, throwIfError, type Observable } from '@komore/reactive';

import { schematicsError } from '../schematics.error';
import { workspaceExecutorDescriptorJsonEntryToWorkspaceExecutorDescriptor } from './json/workspace-executor-descriptor-json-entry-to-workspace-executor-descriptor';
import { type WorkspaceExecutorDescriptorsJson } from './json/workspace-executor-descriptors-json';
import { type WorkspaceExecutorDescriptor } from './workspace-executor-descriptor';

/**
 * Reads workspace executor descriptors
 *
 * @param filePath File path
 * @returns Workspace executor descriptors
 */
export function readWorkspaceExecutorDescriptors(
  filePath: string
): Observable<ReadonlyArray<Omit<WorkspaceExecutorDescriptor, 'package'>>> {
  return readFileContent(filePath, { encoding: 'utf-8' }).pipe(
    throwIfError(isErrorOfType(nodeFileSystemError.fileNotFound), () =>
      schematicsError.executorDescriptorsNotFound({ path: filePath })
    ),
    map(jsonToObject<WorkspaceExecutorDescriptorsJson>()),
    // TODO: validate
    map(({ $schema: _, ...descriptors }) => descriptors),
    map(objectToEntries),
    mapEach(workspaceExecutorDescriptorJsonEntryToWorkspaceExecutorDescriptor)
  );
}
