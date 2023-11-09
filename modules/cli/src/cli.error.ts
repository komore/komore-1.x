import { createErrorType, errorProperties } from '@komore/error';

import { cliDomain } from './cli.domain';

/**
 * Command-line interface error
 */
export const cliError = createErrorType(cliDomain, {
  oopsie: errorProperties<{ exitCode: number }>(),
});
