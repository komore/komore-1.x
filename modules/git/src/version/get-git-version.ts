import { map } from '@komore/reactive';

import { type GitCliClient } from '../git-cli-client';
import { type GitVersion } from './git-version';

export function getGitVersion(cliClient: GitCliClient): () => Observable<GitVersion> {
  return () =>
    cliClient(['--version', '--color=never']).pipe(
      map(x => {
        console.log('hmm', x);
        return {
          buildOptions: {},
          name: 'hello',
        } as GitVersion;
      })
    );
}
