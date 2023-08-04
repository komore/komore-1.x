import { ProjectName } from './project-name';

/**
 * Tests whether a value is a project name
 *
 * @param value Value
 * @returns true if the value is a project name
 */
export function isProjectName(value: unknown): value is ProjectName {
  // TODO: regular expression
  return typeof value === 'string' && value.length > 0;
}
