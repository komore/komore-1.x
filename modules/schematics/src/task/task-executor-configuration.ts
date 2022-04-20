import { type ExecutorReferenceString } from '../executor/executor-reference-string';
import { type LocalTaskExecutorConfiguration } from './local-task-executor-configuration';

/**
 * Task executor configuration
 */
export type TaskExecutorConfiguration = ExecutorReferenceString | LocalTaskExecutorConfiguration;
