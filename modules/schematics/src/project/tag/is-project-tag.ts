import { type ProjectTag } from './project-tag';

/**
 * Tests whether a value is a project tag
 *
 * @param value Value
 * @returns true if the value is a project tag
 */
export function isProjectTag(value: unknown): value is ProjectTag {
  // TODO: better test
  return typeof value === 'string' && value.length > 0;
}
