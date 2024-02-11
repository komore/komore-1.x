import { type GitRevisionRange } from './git-revision-range';

/**
 * Returns a Git revision range as a string
 *
 * @param revisionRange Git revision range
 * @returns String representation
 */
export function gitRevisionRangeToString(revisionRange: GitRevisionRange): string {
  const { excludeTo = false, from = '', to = '' } = revisionRange;
  const separator = excludeTo ? '...' : '..';
  return from + separator + to;
}
