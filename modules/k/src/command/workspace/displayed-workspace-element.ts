import { type WorkspaceExecutorDescriptor } from '@komore/schematics';

/**
 * Displayed workspace element
 *
 * @note This should be in \@komore/schematics with a better name
 */
export type DisplayedWorkspaceElement = { readonly name: string } & Pick<
  WorkspaceExecutorDescriptor,
  'description' | 'package'
>;
