import { type ProjectTag } from './project-tag';
import { validateProjectTag } from './validate-project-tag';

/**
 * Returns a project tag, given a string
 *
 * @param value Value
 * @returns Project tag
 */
export function asProjectTag(value: string): ProjectTag {
  validateProjectTag(value);
  return value;
}
