import { cliEvent, type CliEventType } from '@komore/cli';
import { defineCommand } from '@komore/command';

import { Observable, of, tapNext } from '@komore/reactive';

/**
 * Fetch affected base command
 */
export function fetchAffectedBase(branchName: string, depth: number, includeTags: boolean): Observable<CliEventType> {
  return of(
    cliEvent.messageDisplayed({ message: `git fetch --no-tags(${includeTags}) --depth=${depth} origin ${branchName}` })
  );
}
