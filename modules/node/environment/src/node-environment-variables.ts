import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Node environment variables
 */
export type NodeEnvironmentVariables = ReadonlyRecord<string, string | undefined>;
