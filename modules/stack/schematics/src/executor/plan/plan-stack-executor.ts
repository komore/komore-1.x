import { mapTo, switchMap } from '@komore/reactive';
import { createWorkspaceExecutor, type WorkspaceContext } from '@komore/schematics';
import { executeTerraformPlan } from '../../terraform/command/execute-terraform-plan';

/**
 * plan stack executor
 */
export const planStackExecutor = createWorkspaceExecutor((workspaceContext: WorkspaceContext, parameters$) =>
  parameters$.pipe(
    switchMap(_parameters => executeTerraformPlan(workspaceContext.basePath)), // TODO: build state for display by the CLI
    mapTo(100)
  )
);
