import { type Domain } from '@komore/domain';

import { type ErrorInstance } from './error-instance';

/**
 * Generic error instance
 */
export type GenericErrorInstance = ErrorInstance<Domain, string, any>;
