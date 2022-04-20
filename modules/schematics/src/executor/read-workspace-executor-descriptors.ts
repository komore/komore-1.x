import { jsonToObject, objectToEntries } from '@komore/functional';
import { map, mapEach, tapError, type Observable } from '@komore/reactive';
import { readFileContent } from '@komore/runtime/node';
import { type ReadonlyRecord } from '@komore/typescript';
import { type WorkspaceExecutorDescriptor } from './workspace-executor-descriptor';

export function readWorkspaceExecutorDescriptors(
  filePath: string
): Observable<ReadonlyArray<Omit<WorkspaceExecutorDescriptor, 'package'>>> {
  return readFileContent(filePath, 'utf-8').pipe(
    map(jsonToObject<ReadonlyRecord<string, Pick<WorkspaceExecutorDescriptor, 'description' | 'main'>>>()),
    tapError(() => console.log(`unable to load executor descriptors from ${filePath}`)),
    // TODO: validate
    map(objectToEntries),
    mapEach(([name, descriptor]) => ({
      ...descriptor,
      name,
    }))
  );
}
