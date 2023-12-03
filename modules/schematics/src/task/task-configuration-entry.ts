import { type TaskName } from './name/task-name';
import { type TaskConfiguration } from './task-configuration';

/**
 * Task configuration entry
 */
export type TaskConfigurationEntry = readonly [taskName: TaskName, configuration: TaskConfiguration];
