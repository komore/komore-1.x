import { createErrorType } from '@komore/error';

import { transcribeDomain } from './transcribe.domain';

/**
 * Transcribe error
 */
export const transcribeError = createErrorType(transcribeDomain, {});
