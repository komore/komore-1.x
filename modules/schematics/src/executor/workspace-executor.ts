import { type Observable } from '@komore/reactive';

/**
 * Workspace executor
 *
 * @template OptionsType Options type
 */
export interface WorkspaceExecutor<OptionsType = unknown> {
  /**
   * Workspace executor function
   *
   * @param options$ Observable options
   * @returns Observable that can optionally emit a completion percentage before completing
   */
  (options$: Observable<OptionsType>): Observable<number>;
}
