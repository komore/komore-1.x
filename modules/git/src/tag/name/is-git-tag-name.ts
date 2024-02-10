import { type GitTagName } from './git-tag-name';

/**
 * Tests whether a value is a valid Git tag name
 *
 * @param value Value
 * @returns true if the value is a valid Git tag name
 */
export function isGitTagName(value: string): value is GitTagName {
  // TODO: better test
  return value.length > 0;
}
