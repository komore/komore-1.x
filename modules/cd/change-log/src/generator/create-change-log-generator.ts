import { arrayToArrayReversed } from '@komore/collection';
import { listGitCommits } from '@komore/git';
import { map } from '@komore/reactive';

import { type ChangeLogGenerator } from './change-log-generator';
import { type ChangeLogGeneratorOptions } from './change-log-generator-options';

/**
 * Creates a change log generator
 *
 * @param generatorOptions Change log generator options
 * @returns Change log generator
 */
export function createChangeLogGenerator(generatorOptions: ChangeLogGeneratorOptions): ChangeLogGenerator {
  const { applicationName: _, gitCliClient } = generatorOptions;
  const listCommits = listGitCommits(gitCliClient);
  return ({ previousTagName: from }) =>
    listCommits({ ...(from !== undefined ? { range: { from } } : {}) }).pipe(
      map(arrayToArrayReversed),
      map(commits => {
        console.log('commits', commits.length);
        return void 0;
      })
    );
}
