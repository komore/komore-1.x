import { createErrorType } from '@komore/error';

import { xmlDomain } from './xml.domain';

/**
 * XML error
 */
export const xmlError = createErrorType(xmlDomain, {});
