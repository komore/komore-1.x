import { createErrorType } from '@komore/error';

import { esbuildDomain } from './esbuild.domain';

/**
 * esbuild error
 */
export const esbuildError = createErrorType(esbuildDomain, {});
