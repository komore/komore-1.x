import { type WorkspaceGenerator } from './workspace-generator';

/**
 * Creates a workspace generator
 *
 * @param generator Generator function
 * @returns Workspace generator
 * @template OptionsType Options type
 */
export function createWorkspaceGenerator<OptionsType = unknown>(
  generator: WorkspaceGenerator<OptionsType>
): WorkspaceGenerator<OptionsType> {
  return generator;
}
