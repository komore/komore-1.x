import { type ReadonlyRecord } from '@komore/typescript';

import { type TaskConfigurationJson } from '../../task/json/task-configuration-json';
import { type TaskConfigurationJsonEntry } from '../../task/json/task-configuration-json-entry';

/**
 * Project task configurations JSON
 */
export type ProjectTaskConfigurationsJson =
  | ReadonlyArray<string | TaskConfigurationJsonEntry>
  | ReadonlyRecord<string, string | TaskConfigurationJson>;
