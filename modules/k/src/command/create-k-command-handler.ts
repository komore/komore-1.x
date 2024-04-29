import { cliEvent } from '@komore/cli';
import { matchCommand, type CommandFromType, type CommandHandler } from '@komore/command';
import { type EventFromType } from '@komore/event';
import { getCurrentWorkingDirectory } from '@komore/node/process';
import { first, map, mapTo, mergeMap, of, tapNext, toArray, type Subject } from '@komore/reactive';
import { stringWithPattern } from '@komore/regexp';
import { createWorkspaceContext } from '@komore/schematics';

import { type kCommand } from '../k.command';
import { fetchAffectedBase } from './fetch-affected-base';
import { workspaceContextToTaskExecution } from './run/workspace-context-to-task-execution';
import { displayKomoreVersion } from './version/display-komore-version';
//import { displayKomoreWorkspaceElements } from './workspace/display-komore-workspace-elements';
import { displayKomoreWorkspaceExecutors } from './workspace/display-komore-workspace-executors';
import { displayKomoreWorkspaceGenerators } from './workspace/display-komore-workspace-generators';
import { displayKomoreWorkspacePackages } from './workspace/display-komore-workspace-packages';
import { displayKomoreWorkspaceProjects } from './workspace/display-komore-workspace-projects';

/**
 * Creates a komore command-line interface command handler
 *
 * @param events Command-line interface events subject
 * @returns komore command-line interface command handler
 */
export function createKCommandHandler(
  events: Subject<EventFromType<typeof cliEvent>>
): CommandHandler<CommandFromType<typeof kCommand>> {
  const cwd = getCurrentWorkingDirectory();
  const workspaceContext$ = createWorkspaceContext(cwd);

  return command =>
    matchCommand(command, {
      displayVersion: () => displayKomoreVersion(),
      fetchAffectedBase: ({ branchName, depth, includeTags }) => fetchAffectedBase(branchName, depth, includeTags),
      generateReport: unimplementedCommand('generateReport'),
      list: () => workspaceContext$.pipe(mergeMap(/*displayKomoreWorkspaceElements*/ displayKomoreWorkspaceProjects)),
      listExecutors: () => workspaceContext$.pipe(mergeMap(displayKomoreWorkspaceExecutors)),
      listGenerators: () => workspaceContext$.pipe(mergeMap(displayKomoreWorkspaceGenerators)),
      listPackages: () => workspaceContext$.pipe(mergeMap(displayKomoreWorkspacePackages)),
      listProjects: () => workspaceContext$.pipe(mergeMap(displayKomoreWorkspaceProjects)),
      runExecutor: ({ taskName, parallel = 1, ...command }) =>
        'all' in command || 'projects' in command
          ? workspaceContext$.pipe(
              mergeMap(workspaceContext =>
                workspaceContext.project.list.pipe(
                  first(),
                  map(projects => {
                    const projectNames = projects.map(([projectName]) => projectName);
                    return 'projects' in command
                      ? projectNames.filter(stringWithPattern(new RegExp(command.projects)))
                      : projectNames;
                  }),
                  map(projectNames => workspaceContextToTaskExecution(taskName, projectNames)),
                  mergeMap(toTaskExecution => toTaskExecution(workspaceContext), parallel)
                )
              )
            )
          : /*workspaceContext$.pipe(
        mergeMap(workspaceContext => workspaceContext.project.list.pipe(
          first(),
          map(projects => projects.filter(([, { tasks }]) => tasks.list....))
        ))
      )*/ workspaceContext$.pipe(mergeMap(workspaceContextToTaskExecution(taskName, [command.projectName]))),
      runGenerator: unimplementedCommand('runGenerator'),
      validateWorkspace: unimplementedCommand('validateWorkspace'),
    }).pipe(
      tapNext(event => events.next(event)),
      toArray(),
      mapTo(void 0)
    );
}

function unimplementedCommand(message: string): () => Observable<EventFromType<typeof cliEvent>> {
  const event = cliEvent.messageDisplayed({ message });
  return () => of(event);
}
