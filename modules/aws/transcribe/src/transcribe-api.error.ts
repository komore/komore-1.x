import { createErrorType } from '@komore/error';

import { transcribeDomain } from './transcribe.domain';

/**
 * Transcribe API error
 */
export const transcribeApiError = createErrorType(transcribeDomain, {});
