import { type GitRefName } from '../ref/name/git-ref-name';
import { type GitTagName } from '../tag/name/git-tag-name';

/**
 * Git revision
 */
export type GitRevision = GitRefName | GitTagName;
