import { each } from '@komore/collection';
import { map } from '@komore/reactive';
import { stringToLines, stringToTrimmedString, stringToMatchesWith } from '@komore/string';

import { type GitCliClient } from '../git-cli-client';
import { gitCliBuildOptionLinesToBuildOptions } from './git-cli-build-option-lines-to-build-options';
import { gitCliVersionLineToVersionName } from './git-cli-version-line-to-version-name';
import { type GitVersion } from './git-version';

/**
 * Creates a function that returns the Git version
 *
 * @param cliClient Git CLI client
 * @returns Function that returns the Git version
 */
export function getGitVersion(cliClient: GitCliClient): () => Observable<GitVersion> {
  return () =>
    cliClient(['--version', '--build-options']).pipe(
      map(stringToLines()),
      map(each(stringToTrimmedString)),
      map(lines => {
        const versionLine = lines[0] ?? '';
        const name = gitCliVersionLineToVersionName(versionLine);
        const buildOptionLines = lines.slice(1);
        const buildOptions = gitCliBuildOptionLinesToBuildOptions(buildOptionLines);
        return {
          buildOptions,
          name,
        };
      })
    );
}
