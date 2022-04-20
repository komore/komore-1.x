import { mapTo } from '@komore/reactive';
import { createWorkspaceGenerator } from '@komore/schematics';

/**
 * Stack initialization generator
 */
export const stackInitializationGenerator = createWorkspaceGenerator((_workspaceContext, parameters$) =>
  parameters$.pipe(mapTo(100))
);
