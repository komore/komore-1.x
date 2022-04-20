import { type Observable } from '@komore/reactive';
import { type WorkspaceExecutor } from './workspace-executor';

/**
 * Creates a workspace executor
 *
 * @param executor Executor function
 * @returns Workspace executor
 */
export function createWorkspaceExecutor(executor: WorkspaceExecutor<unknown>): WorkspaceExecutor<unknown>;

/**
 * Creates a workspace executor
 *
 * @param executor Executor function
 * @param schemaValidator Schema validator
 * @returns Workspace executor
 */
export function createWorkspaceExecutor<Parameters = unknown>(
  executor: WorkspaceExecutor<Parameters>,
  schemaValidator?: (parameters$: Observable<unknown>) => Observable<Parameters>
): WorkspaceExecutor<Parameters>;

export function createWorkspaceExecutor<Parameters = unknown>(
  executor: WorkspaceExecutor<Parameters>,
  schemaValidator?: (parameters$: Observable<unknown>) => Observable<Parameters>
): WorkspaceExecutor<Parameters> {
  if (schemaValidator === undefined) {
    return executor;
  }

  return (workspaceContext$, parameters$) => {
    const validatedParameters$ = schemaValidator(parameters$);
    return executor(workspaceContext$, validatedParameters$);
  };
}
