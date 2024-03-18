import { createErrorType } from '@komore/error';

import { transcribeDomain } from './transcribe.domain';

/**
 * Transcribe type error
 */
export const transcribeTypeError = createErrorType(transcribeDomain, {});
