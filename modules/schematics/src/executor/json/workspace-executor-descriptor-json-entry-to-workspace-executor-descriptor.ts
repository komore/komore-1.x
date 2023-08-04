import { type ExecutorName } from '../name/executor-name';
import { type WorkspaceExecutorDescriptor } from '../workspace-executor-descriptor';
import { type WorkspaceExecutorDescriptorJson } from './workspace-executor-descriptor-json';

export function workspaceExecutorDescriptorJsonEntryToWorkspaceExecutorDescriptor(
  entry: readonly [name: ExecutorName, descriptorJson: WorkspaceExecutorDescriptorJson]
): Omit<WorkspaceExecutorDescriptor, 'package'> {
  const [name, { factory, options = {}, ...jsonDescriptor }] = entry;
  if (factory === undefined) {
    throw new Error(`TODO: typed error; descriptor for executor ${name} has no factory defined`);
  }
  return {
    ...jsonDescriptor,
    factory,
    name,
    options,
  };
}
