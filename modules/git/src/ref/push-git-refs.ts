import { redactValue } from '@komore/reactive';

import { type GitCliClient } from '../git-cli-client';

export function pushGitRefs(cliClient: GitCliClient): (options: unknown) => Observable<void> {
  return _options => cliClient(['push']).pipe(redactValue());
}
