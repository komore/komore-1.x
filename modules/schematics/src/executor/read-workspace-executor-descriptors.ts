import { objectToEntries } from '@komore/functional';
import { jsonToObject } from '@komore/json';
import { readFileContent } from '@komore/node/file-system';
import { map, mapEach, tapError, type Observable } from '@komore/reactive';

import { workspaceExecutorDescriptorJsonEntryToWorkspaceExecutorDescriptor } from './json/workspace-executor-descriptor-json-entry-to-workspace-executor-descriptor';
import { WorkspaceExecutorDescriptorsJson } from './json/workspace-executor-descriptors-json';
import { type WorkspaceExecutorDescriptor } from './workspace-executor-descriptor';

export function readWorkspaceExecutorDescriptors(
  filePath: string
): Observable<ReadonlyArray<Omit<WorkspaceExecutorDescriptor, 'package'>>> {
  return readFileContent(filePath, 'utf-8').pipe(
    map(jsonToObject<WorkspaceExecutorDescriptorsJson>()),
    tapError(() => console.log(`unable to load executor descriptors from ${filePath}`)),
    // TODO: validate
    map(({ $schema: _, ...descriptors }) => descriptors),
    map(objectToEntries),
    mapEach(workspaceExecutorDescriptorJsonEntryToWorkspaceExecutorDescriptor)
  );
}
