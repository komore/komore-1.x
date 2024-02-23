import { createErrorType, errorProperties } from '@komore/error';

import { cliRouterDomain } from './cli-router.domain';

/**
 * Command-line router error
 */
export const cliRouterError = createErrorType(cliRouterDomain, {});
