import { cwd } from 'process';

import { cliEvent, type CliEvent } from '@komore/cli';
import { matchCommand, type CommandFromType, type CommandHandler } from '@komore/command';
import { first, map, mapTo, mergeMap, of, tapNext, toArray, type Observable, type Subject } from '@komore/reactive';
import { createWorkspaceContext } from '@komore/schematics';

import { type kCommand } from '../k.command';
import { fetchAffectedBase } from './fetch-affected-base';
import { workspaceContextToTaskExecution } from './run/workspace-context-to-task-execution';
import { displayKomoreVersion } from './version/display-komore-version';
//import { displayKomoreWorkspaceElements } from './workspace/display-komore-workspace-elements';
import { displayKomoreWorkspaceExecutors } from './workspace/display-komore-workspace-executors';
import { displayKomoreWorkspaceGenerators } from './workspace/display-komore-workspace-generators';
import { displayKomoreWorkspaceProjects } from './workspace/display-komore-workspace-projects';

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
      list: () => workspaceContext$.pipe(mergeMap(/*displayKomoreWorkspaceElements*/ displayKomoreWorkspaceProjects)),
      listExecutors: () => workspaceContext$.pipe(mergeMap(displayKomoreWorkspaceExecutors)),
      listGenerators: () => workspaceContext$.pipe(mergeMap(displayKomoreWorkspaceGenerators)),
      listPackages: () => of(cliEvent.messageDisplayed({ message: 'listPackages' })),
      listProjects: () => workspaceContext$.pipe(mergeMap(displayKomoreWorkspaceProjects)),
      runExecutor: ({ taskName, ...command }) => {
        console.log('task', taskName, command);
        return 'all' in command
          ? workspaceContext$.pipe(
              mergeMap(workspaceContext =>
                workspaceContext.project.list.pipe(
                  first(),
                  map(projects => projects.map(([projectName]) => projectName)),
                  map(projectNames => workspaceContextToTaskExecution(taskName, projectNames)),
                  mergeMap(toTaskExecution => toTaskExecution(workspaceContext))
                )
              )
            )
          : /*workspaceContext$.pipe(
        mergeMap(workspaceContext => workspaceContext.project.list.pipe(
          first(),
          map(projects => projects.filter(([, { tasks }]) => tasks.list....))
        ))
      )*/ workspaceContext$.pipe(mergeMap(workspaceContextToTaskExecution(taskName, [command.projectName])));
      },
      runGenerator: () => of(cliEvent.messageDisplayed({ message: 'runGenerator' })),
      validateWorkspace: () => of(cliEvent.messageDisplayed({ message: 'validateWorkspace' })),
    }).pipe(
      tapNext(event => events.next(event)),
      toArray(),
      mapTo(void 0)
    );
}
