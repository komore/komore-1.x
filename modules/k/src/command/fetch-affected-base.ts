import { cliEvent } from '@komore/cli';
import { type EventFromType } from '@komore/event';

import { of } from '@komore/reactive';

/**
 * Fetches an affected base
 */
export function fetchAffectedBase(
  branchName: string,
  depth: number,
  includeTags: boolean
): Observable<EventFromType<typeof cliEvent>> {
  // TODO: split into 2
  // TODO: @komore/git/cli?
  return of(
    cliEvent.messageDisplayed({ message: `git fetch --no-tags(${includeTags}) --depth=${depth} origin ${branchName}` })
  );
}
