import { cwd } from 'node:process';

/**
 * Returns the current working directory
 *
 * @returns Current working directory
 */
export function getCurrentWorkingDirectory(): string {
  return cwd();
}
