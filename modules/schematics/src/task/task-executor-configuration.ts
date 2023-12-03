import { type ExecutorReferenceString } from '../executor/reference/executor-reference-string';
import { type LocalTaskExecutorConfiguration } from './local-task-executor-configuration';

/**
 * Task executor configuration
 */
export type TaskExecutorConfiguration = ExecutorReferenceString | LocalTaskExecutorConfiguration;
