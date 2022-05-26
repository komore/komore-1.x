import { type ReadonlyRecord } from '@komore/typescript';
import { type ExecutorReferenceString } from '../../executor/executor-reference-string';
import { type JsonTaskConfiguration } from '../../task/json/json-task-configuration';
import { type TaskName } from '../../task/task-name';

/**
 * JSON project task configurations
 */
export type JsonProjectTaskConfigurations =
  | ReadonlyArray<
      string | readonly [taskName: TaskName, taskConfiguration: ExecutorReferenceString | JsonTaskConfiguration]
    >
  | ReadonlyRecord<TaskName, ExecutorReferenceString | JsonTaskConfiguration>;
