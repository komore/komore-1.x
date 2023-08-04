import { type ReadonlyRecord } from '@komore/typescript';

import { type TaskConfigurationJson } from '../../task/json/task-configuration-json';

/**
 * Project task configurations JSON
 */
export type ProjectTaskConfigurationsJson =
  | ReadonlyArray<string | readonly [taskName: string, taskReferenceOrConfiguration: string | TaskConfigurationJson]>
  | ReadonlyRecord<string, string | TaskConfigurationJson>;
