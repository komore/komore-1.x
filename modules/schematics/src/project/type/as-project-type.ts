import { type ProjectType } from './project-type';
import { validateProjectType } from './validate-project-type';

/**
 * Returns a project type, given a string
 *
 * @param value Value
 * @returns Project type
 */
export function asProjectType(value: string): ProjectType {
  validateProjectType(value);
  return value;
}
