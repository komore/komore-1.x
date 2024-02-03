import { createCommandType } from '@komore/command';

import { squareDomain } from './square.domain';

/**
 * Square command
 */
export const squareCommand = createCommandType(squareDomain, {});
