import { type WorkspaceGenerator } from './workspace-generator';

/**
 * Creates a workspace generator
 *
 * @param generator Generator function
 * @returns Workspace generator
 */
export function createWorkspaceGenerator(generator: WorkspaceGenerator<unknown>): WorkspaceGenerator<unknown>;

/**
 * Creates a workspace generator
 *
 * @param generator Generator function
 * @param schemaValidator Schema validator
 * @returns Workspace generator
 */
export function createWorkspaceGenerator<Parameters = unknown>(
  generator: WorkspaceGenerator<Parameters>,
  schemaValidator?: (parameters$: Observable<unknown>) => Observable<Parameters>
): WorkspaceGenerator<Parameters>;

export function createWorkspaceGenerator<Parameters = unknown>(
  generator: WorkspaceGenerator<Parameters>,
  schemaValidator?: (parameters$: Observable<unknown>) => Observable<Parameters>
): WorkspaceGenerator<Parameters> {
  if (schemaValidator === undefined) {
    return generator;
  }

  return (workspaceContext$, parameters$) => {
    const validatedParameters$ = schemaValidator(parameters$);
    return generator(workspaceContext$, validatedParameters$);
  };
}
