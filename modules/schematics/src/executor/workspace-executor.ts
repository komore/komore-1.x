import { type Observable } from '@komore/reactive';
import { type WorkspaceContext } from '../context/workspace-context';

/**
 * Workspace executor
 *
 * @template Parameters Parameters type
 */
export interface WorkspaceExecutor<Parameters> {
  /**
   * Workspace executor function
   *
   * @param workspaceContext Workspace context
   * @param parameters$ Observable parameters
   * @returns Observable that can optionally emit a completion percentage before completing
   */
  (workspaceContext: WorkspaceContext, parameters$: Observable<Parameters>): Observable<number>;
}
