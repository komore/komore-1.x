import { defer, isObservable, of, type Observable } from '@komore/reactive';
import { type WorkspaceExecutor } from './workspace-executor';
import { type WorkspaceExecutorFactory } from './workspace-executor-factory';

/**
 * Creates a workspace executor factory
 *
 * @param factory Factory function
 * @returns Workspace executor factory
 * @template OptionsType Options type
 */
export function createWorkspaceExecutorFactory<OptionsType = unknown>(
  factory: () => WorkspaceExecutor<OptionsType> | Observable<WorkspaceExecutor<OptionsType>>
): WorkspaceExecutorFactory<OptionsType> {
  return () =>
    defer(() => {
      const workspaceExecutor = factory();
      return isObservable(workspaceExecutor) ? workspaceExecutor : of(workspaceExecutor);
    });
}
