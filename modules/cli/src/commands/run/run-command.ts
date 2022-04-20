import { createCliArgument as arg, createCliCommand } from '@komore/application-cli';
import { map, mapTo, mergeMap, of, take, tapNext } from '@komore/reactive';
import {
  createWorkspaceContext,
  packageReferenceNameToPackageReference,
  packageReferenceToExportedEntry,
  projectTaskNameToProjectTaskReference,
} from '@komore/schematics';
import { type TaskRunnerFactory } from '@komore/schematics/runner';

/**
 * run command definition
 */
export const runCommand = createCliCommand(
  'run',
  $ =>
    $.pipe(
      map(({ args: [target] }) => projectTaskNameToProjectTaskReference(target as string)), // TODO: remove cast
      mergeMap(({ projectName, taskName }) =>
        createWorkspaceContext(process.cwd()).pipe(
          // TODO: move most of this to the task runner
          mergeMap(workspaceContext =>
            workspaceContext.configuration.pipe(
              take(1),
              mergeMap(({ projects, task }) => {
                const projectConfiguration = projects?.[projectName];
                if (projectConfiguration === undefined) {
                  throw new Error(`unknown project ${projectName}`);
                }

                const taskConfiguration = projectConfiguration.tasks?.[taskName];
                if (taskConfiguration === undefined) {
                  throw new Error(`project ${projectName} has no task named ${taskName}`);
                }

                const packageReference = packageReferenceNameToPackageReference(task.runner as string);
                return packageReferenceToExportedEntry<TaskRunnerFactory<unknown>>(packageReference).pipe(
                  mergeMap(createTaskRunner => createTaskRunner(task.options, workspaceContext)),
                  map(taskRunner => ({
                    taskRunner,
                    projectName,
                    taskName,
                  }))
                );
              })
            )
          )
        )
      ),
      mergeMap(({ taskRunner, projectName, taskName }) => {
        console.log(`run task ${taskName} of ${projectName}`);
        return taskRunner(of({ projectName, taskName }));
      }),
      tapNext(result => console.log('reeessult', result)),
      mapTo(0)
    ),
  {
    description: 'Runs a task',
    args: [
      arg('target', {
        description: 'Target task',
        required: true,
        type: 'string',
      }),
    ],
  }
);
