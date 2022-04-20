import { mapTo } from '@komore/reactive';
import { createWorkspaceGenerator } from '@komore/schematics';

/**
 * Stack generator
 */
export const stackGenerator = createWorkspaceGenerator((_workspaceContext, parameters$) =>
  parameters$.pipe(mapTo(100))
);

// TODO:
// - add the deploy task
// - add the plan task
// - add the destroy task
// - 1. select stack type(s) (aws, azure, gcloud)
// - 2. select backend type (based on offer once the stack type(s) have been chosen, off
