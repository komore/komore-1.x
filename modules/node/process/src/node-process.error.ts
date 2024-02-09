import { type ExecException } from 'node:child_process';

import { createErrorType, errorProperties } from '@komore/error';

import { nodeProcessDomain } from './node-process.domain';

/**
 * Node process error
 */
export const nodeProcessError = createErrorType(nodeProcessDomain, {
  executionError: errorProperties<{
    readonly exception: ExecException;
    readonly stderr: string;
    readonly stdout: string;
  }>(),
});
