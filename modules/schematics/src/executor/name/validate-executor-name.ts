import { schematicsError } from '../../schematics.error';
import { type ExecutorName } from './executor-name';
import { isExecutorName } from './is-executor-name';

/**
 * Validates a executor name
 *
 * @param executorName Executor name
 */
export function validateExecutorName(executorName: string): asserts executorName is ExecutorName {
  if (!isExecutorName(executorName)) {
    throw schematicsError.invalidExecutorName({ executorName });
  }
}
