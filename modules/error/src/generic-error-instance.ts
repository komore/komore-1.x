import { type GenericDomain } from '@komore/domain';

import { type ErrorInstance } from './error-instance';

/**
 * Generic error instance
 */
export type GenericErrorInstance = ErrorInstance<GenericDomain, string, any>;
