import { createErrorType } from '@komore/error';
import { terraformDomain } from '@komore/terraform';

/**
 * Terraform error
 */
export const terraformError = createErrorType(terraformDomain, {});
