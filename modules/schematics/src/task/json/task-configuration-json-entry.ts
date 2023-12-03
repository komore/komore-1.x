import { type TaskConfigurationJson } from './task-configuration-json';

/**
 * Task configuration JSON entry
 */
export type TaskConfigurationJsonEntry = readonly [
  taskName: string,
  executorReferenceStringOrTaskConfigurationJson: string | TaskConfigurationJson,
];
