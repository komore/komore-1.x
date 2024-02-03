import { asObservable, defer } from '@komore/reactive';

import { type WorkspaceExecutor } from '../workspace-executor';
import { type WorkspaceExecutorFactory } from './workspace-executor-factory';
import { type WorkspaceExecutorFactoryOptions } from './workspace-executor-factory-options';

/**
 * Creates a workspace executor factory
 *
 * @param factory Factory function
 * @returns Workspace executor factory
 * @template OptionsType Options type
 */
export function createWorkspaceExecutorFactory<OptionsType = unknown>(
  factory: (
    options: WorkspaceExecutorFactoryOptions
  ) => WorkspaceExecutor<OptionsType> | Observable<WorkspaceExecutor<OptionsType>>
): WorkspaceExecutorFactory<OptionsType> {
  return options =>
    defer(() => {
      const workspaceExecutor = factory(options);
      return asObservable(workspaceExecutor);
    });
}
