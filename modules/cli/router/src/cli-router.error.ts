import { createErrorType } from '@komore/error';
import { cliRouterDomain } from './cli-router.domain';

export const cliRouterError = createErrorType(cliRouterDomain, {});
