import { type PackageName } from '../package/package-name';
import { type ExecutorName } from './executor-name';

/**
 * Executor reference
 */
export interface ExecutorReference {
  /**
   * Executor name
   */
  readonly executorName: ExecutorName;
  /**
   * Package name
   */
  readonly packageName: PackageName;
}
