import { schematicsError } from '../../schematics.error';
import { type ExecutorName } from '../name/executor-name';
import { type WorkspaceExecutorDescriptor } from '../workspace-executor-descriptor';
import { type WorkspaceExecutorDescriptorJson } from './workspace-executor-descriptor-json';

export function workspaceExecutorDescriptorJsonEntryToWorkspaceExecutorDescriptor(
  entry: readonly [name: ExecutorName, descriptorJson: WorkspaceExecutorDescriptorJson]
): Omit<WorkspaceExecutorDescriptor, 'package'> {
  const [name, { factory, options = {}, ...jsonDescriptor }] = entry;
  if (factory === undefined) {
    throw schematicsError.executorFactoryNotFound({ executorName: name, path: 'dunno' });
  }

  return {
    ...jsonDescriptor,
    factory,
    name,
    options,
  };
}
