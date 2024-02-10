import { type GitTagName } from './git-tag-name';
import { validateGitTagName } from './validate-git-tag-name';

/**
 * Safely casts a Git tag name string to a Git tag name
 *
 * @param tagName Git tag name string
 * @returns Git tag name
 */
export function asGitTagName(tagName: string): GitTagName {
  validateGitTagName(tagName);
  return tagName;
}
