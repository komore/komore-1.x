import { gitTypeError } from '../../git-type.error';
import { type GitTagName } from './git-tag-name';
import { isGitTagName } from './is-git-tag-name';

/**
 * Validates that a value is a valid Git tag name
 *
 * @param value Value
 */
export function validateGitTagName(value: string): asserts value is GitTagName {
  if (!isGitTagName(value)) {
    throw gitTypeError.invalidTagName({ tagName: value });
  }
}
