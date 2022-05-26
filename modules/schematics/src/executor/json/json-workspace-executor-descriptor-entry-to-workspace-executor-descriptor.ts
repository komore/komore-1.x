import { type ExecutorName } from '../executor-name';
import { type WorkspaceExecutorDescriptor } from '../workspace-executor-descriptor';
import { type JsonWorkspaceExecutorDescriptor } from './json-workspace-executor-descriptor';

export function jsonWorkspaceExecutorDescriptorEntryToWorkspaceExecutorDescriptor(
  entry: readonly [name: ExecutorName, jsonDescriptor: JsonWorkspaceExecutorDescriptor]
): Omit<WorkspaceExecutorDescriptor, 'package'> {
  const [name, { factory, options, ...jsonDescriptor }] = entry;
  if (factory === undefined) {
    throw new Error(`TODO: typed error; descriptor for executor ${name} has no factory defined`);
  }
  return {
    ...jsonDescriptor,
    factory,
    name,
    options: options ?? {},
  };
}
