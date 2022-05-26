import { jsonToObject, objectToEntries } from '@komore/functional';
import { map, mapEach, tapError, type Observable } from '@komore/reactive';
import { readFileContent } from '@komore/runtime/node';
import { jsonWorkspaceExecutorDescriptorEntryToWorkspaceExecutorDescriptor } from './json/json-workspace-executor-descriptor-entry-to-workspace-executor-descriptor';
import { JsonWorkspaceExecutorDescriptors } from './json/json-workspace-executor-descriptors';
import { type WorkspaceExecutorDescriptor } from './workspace-executor-descriptor';

export function readWorkspaceExecutorDescriptors(
  filePath: string
): Observable<ReadonlyArray<Omit<WorkspaceExecutorDescriptor, 'package'>>> {
  return readFileContent(filePath, 'utf-8').pipe(
    map(jsonToObject<JsonWorkspaceExecutorDescriptors>()),
    tapError(() => console.log(`unable to load executor descriptors from ${filePath}`)),
    // TODO: validate
    map(({ $schema: _, ...descriptors }) => descriptors),
    map(objectToEntries),
    mapEach(jsonWorkspaceExecutorDescriptorEntryToWorkspaceExecutorDescriptor)
  );
}
