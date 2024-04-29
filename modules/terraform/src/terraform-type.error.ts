import { createErrorType } from '@komore/error';

import { terraformDomain } from './terraform.domain';

/**
 * Terraform type error
 */
export const terraformTypeError = createErrorType(terraformDomain, {});
