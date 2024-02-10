import { redactValue } from '@komore/reactive';

import { type GitCliClient } from '../git-cli-client';

export function pullGitRefs(cliClient: GitCliClient): (options: unknown) => Observable<void> {
  return _options => cliClient(['pull']).pipe(redactValue());
}
