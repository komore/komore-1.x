import { mapTo } from '@komore/reactive';
import { createWorkspaceExecutor } from '@komore/schematics';

export const deployStackExecutor = createWorkspaceExecutor((_workspaceContext, parameters$) =>
  parameters$.pipe(mapTo(100))
);
