import { type GitBranch } from './git-branch';
import { validateGitBranchName } from './name/validate-git-branch-name';

export function gitCliBranchLineToBranch(line: string): GitBranch {
  const matches = line.match(/^\*?\s?([^\s]+)\s([^\s]+)\s(.+)*$/) as
    | readonly [matches: string, name: string, hash: string, message: string]
    | null;
  if (matches === null) {
    throw new Error(`TODO: git branch list line "${line}"`);
  }

  const [, name, hash, message] = matches;
  const active = line.startsWith('*');

  console.log('hm', { active, hash, message, name });
  validateGitBranchName(name);
  return {
    name,
  };
}
