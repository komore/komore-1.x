import { type ExecutorName } from './executor-name';

/**
 * Tests whether a value is a valid executor name
 *
 * @param value Value
 * @returns true if the value is a valid executor name
 */
export function isExecutorName(value: string): value is ExecutorName {
  // TODO: better test
  return value.length > 0;
}
