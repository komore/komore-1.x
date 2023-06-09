import { executeChildProcess, type EnvironmentVariables } from '@komore/runtime/node';
import { map, of, type Observable } from '@komore/reactive';
import { stringToTrimmedString } from '@komore/string';

/**
 * Returns the branch name from the GitHub environment information or directly from git
 *
 * @param environmentVariables Environment variables
 * @returns Branch name
 */
export function detectRepositoryBranchName(environmentVariables: EnvironmentVariables): Observable<string> {
  const githubBranchName = environmentVariables['GITHUB_HEAD_REF'] ?? environmentVariables['GITHUB_REF'];
  const gitlabBranchName = environmentVariables['CI_COMMIT_REF_NAME'];
  const environmentBranchName = githubBranchName ?? gitlabBranchName;
  if (environmentBranchName) {
    return of(environmentBranchName);
  }

  return executeChildProcess('git branch --show-current').pipe(
    map(({ stdout }) => stdout),
    map(stringToTrimmedString)
  );
}
