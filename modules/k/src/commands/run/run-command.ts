import { createCliArgument as arg, createCliCommand } from '@komore/application-cli';
import { map, mapTo, mergeMap, of, tapNext } from '@komore/reactive';
import {
  createWorkspaceContext,
  packageReferenceNameToPackageReference,
  packageReferenceToExportedEntry,
  taskReferenceStringToTaskReference,
  type TaskReferenceString,
} from '@komore/schematics';
import { type TaskRunnerFactory } from '@komore/schematics/runner';

/**
 * run command definition
 */
export const runCommand = createCliCommand(
  'run',
  $ =>
    $.pipe(
      // TODO: remove cast
      map(({ args: [target] }) => taskReferenceStringToTaskReference(target as TaskReferenceString)),
      tapNext(({ projectName, taskName }) => console.log(`running ${taskName} on ${projectName}`)),
      mergeMap(({ projectName, taskName }) =>
        createWorkspaceContext(process.cwd()).pipe(
          // TODO: move most of this to the task runner
          mergeMap(workspaceContext => {
            const { options, runner } = workspaceContext.configuration.task;
            const packageReference = packageReferenceNameToPackageReference(runner);
            return packageReferenceToExportedEntry<TaskRunnerFactory<unknown>>()(packageReference).pipe(
              mergeMap(createTaskRunner => createTaskRunner(options, workspaceContext))
            );
          }),
          mergeMap(taskRunner => taskRunner(of({ projectName, taskName })))
        )
      ),
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
