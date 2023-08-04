import { type ReadonlyRecord } from '@komore/typescript';

import { type ExecutorName } from '../name/executor-name';
import { type WorkspaceExecutorDescriptorJson } from './workspace-executor-descriptor-json';

/**
 * Workspace executor descriptors JSON
 */
export interface WorkspaceExecutorDescriptorsJson
  extends ReadonlyRecord<ExecutorName, WorkspaceExecutorDescriptorJson> {
  readonly $schema: 'https://komore.dev/json-schemas/schematics/executors';
}
