import { type ProjectName } from './project-name';
import { validateProjectName } from './validate-project-name';

/**
 * Returns a project name, given a string
 *
 * @param value Value
 * @returns Project name
 */
export function asProjectName(value: string): ProjectName {
  validateProjectName(value);
  return value;
}
