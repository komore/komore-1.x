import { type ReadonlyRecord } from '@komore/typescript';
import { type ExecutorName } from '../executor-name';
import { type JsonWorkspaceExecutorDescriptor } from './json-workspace-executor-descriptor';

/**
 * JSON workspace executor descriptors
 */
export interface JsonWorkspaceExecutorDescriptors
  extends ReadonlyRecord<ExecutorName, JsonWorkspaceExecutorDescriptor> {
  readonly $schema: 'https://komore.dev/json-schemas/schematics/executors';
}
