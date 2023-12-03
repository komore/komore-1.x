import { type DisplayedWorkspaceElement } from './displayed-workspace-element';

/**
 * Displayed workspace group
 */
export interface DisplayedWorkspaceGroup<T extends DisplayedWorkspaceElement> {
  /**
   * List of elements
   */
  readonly elements: ReadonlyArray<T>;
  /**
   * Group name
   */
  readonly name: string;
}
