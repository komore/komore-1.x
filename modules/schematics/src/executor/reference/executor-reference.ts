import { type PackageName } from '../../package/name/package-name';
import { type ExecutorName } from '../name/executor-name';

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
