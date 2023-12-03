import { isErrorOfType } from '@komore/error';
import { objectToEntries } from '@komore/functional';
import { jsonToObject } from '@komore/json';
import { nodeFileSystemError, readFileContent } from '@komore/node/file-system';
import { map, mapEach, throwIfError, type Observable } from '@komore/reactive';

import { schematicsError } from '../schematics.error';
import { workspaceGeneratorDescriptorJsonEntryToWorkspaceGeneratorDescriptor } from './json/workspace-generator-descriptor-json-entry-to-workspace-generator-descriptor';
import { type WorkspaceGeneratorDescriptorsJson } from './json/workspace-generator-descriptors-json';
import { type WorkspaceGeneratorDescriptor } from './workspace-generator-descriptor';

/**
 * Returns a list of workspace generator descriptors, given a file path
 *
 * @param filePath File path
 * @returns List of workspace generator descriptors
 */
export function readWorkspaceGeneratorDescriptors(
  filePath: string
): Observable<ReadonlyArray<Omit<WorkspaceGeneratorDescriptor, 'package'>>> {
  return readFileContent(filePath, 'utf-8').pipe(
    throwIfError(isErrorOfType(nodeFileSystemError.fileNotFound), () =>
      schematicsError.generatorDescriptorsNotFound({ path: filePath })
    ),
    map(jsonToObject<WorkspaceGeneratorDescriptorsJson>()),
    // TODO: validate
    map(({ $schema: _, ...descriptors }) => descriptors),
    map(objectToEntries),
    mapEach(workspaceGeneratorDescriptorJsonEntryToWorkspaceGeneratorDescriptor)
  );
}
