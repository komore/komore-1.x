import { type ProjectType } from './project-type';
import { projectTypes } from './project-types';

/**
 * Tests whether a value is a project type
 *
 * @param value Value
 * @returns true if the value is a project type
 */
export function isProjectType(value: unknown): value is ProjectType {
  return typeof value === 'string' && set.has(value);
}

const set: ReadonlySet<string> = new Set(projectTypes);
