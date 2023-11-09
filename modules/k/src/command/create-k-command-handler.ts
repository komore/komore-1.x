import { cwd } from 'process';

import { cliEvent, type CliEvent } from '@komore/cli';
import { matchCommand, type CommandFromType, type CommandHandler } from '@komore/command';
import {
  mapTo,
  of,
  toArray,
  tap,
  type Observable,
  type Subject,
  mergeMap,
  catchError,
  throwError,
} from '@komore/reactive';
import { createWorkspaceContext } from '@komore/schematics';

import { kCommand } from '../k.command';
import { displayKomoreVersion } from './display-komore-version';
import { displayKomoreWorkspaceElements } from './display-komore-workspace-elements';
import { displayKomoreWorkspaceExecutors } from './display-komore-workspace-executors';
import { fetchAffectedBase } from './fetch-affected-base';

/**
 * Creates a komore command-line interface command handler
 *
 * @param events Command-line interface events subject
 * @returns komore command-line interface command handler
 */
export function createKCommandHandler(events: Subject<CliEvent>): CommandHandler<CommandFromType<typeof kCommand>> {
  const workspaceContext$ = createWorkspaceContext(cwd());

  return command =>
    // TODO: avoid having to specify types
    matchCommand<CommandFromType<typeof kCommand>, Observable<CliEvent>>(command, {
      displayVersion: () => displayKomoreVersion(),
      fetchAffectedBase: ({ branchName, depth, includeTags }) => fetchAffectedBase(branchName, depth, includeTags),
      generateReport: () => of(cliEvent.messageDisplayed({ message: 'generateReport' })),
      list: () =>
        workspaceContext$.pipe(
          mergeMap(displayKomoreWorkspaceElements),
          catchError(e => {
            console.log('omfg', (e as Error).stack);
            return throwError(() => e);
          })
        ),
      listExecutors: () => workspaceContext$.pipe(mergeMap(displayKomoreWorkspaceExecutors)),
      listGenerators: () => of(cliEvent.messageDisplayed({ message: 'listGenerators' })),
      listPackages: () => of(cliEvent.messageDisplayed({ message: 'listPackages' })),
      listProjects: () => of(cliEvent.messageDisplayed({ message: 'listProjects' })),
      runExecutor: () => of(cliEvent.messageDisplayed({ message: 'runExecutor' })),
      runGenerator: () => of(cliEvent.messageDisplayed({ message: 'runGenerator' })),
      validateWorkspace: () => of(cliEvent.messageDisplayed({ message: 'validateWorkspace' })),
    }).pipe(tap(events), toArray(), mapTo(void 0));
}
