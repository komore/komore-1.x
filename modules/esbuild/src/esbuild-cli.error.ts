import { createErrorType } from '@komore/error';

import { esbuildDomain } from './esbuild.domain';

/**
 * esbuild CLI error
 */
export const esbuildCliError = createErrorType(esbuildDomain, {});
