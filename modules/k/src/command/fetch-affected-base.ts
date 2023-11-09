import { cliEvent, type CliEvent } from '@komore/cli';

import { of, type Observable } from '@komore/reactive';

/**
 * Fetches an affected base
 */
export function fetchAffectedBase(branchName: string, depth: number, includeTags: boolean): Observable<CliEvent> {
  // TODO: split into 2
  return of(
    cliEvent.messageDisplayed({ message: `git fetch --no-tags(${includeTags}) --depth=${depth} origin ${branchName}` })
  );
}
