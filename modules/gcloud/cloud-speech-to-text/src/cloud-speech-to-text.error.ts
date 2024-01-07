import { createErrorType } from '@komore/error';

import { cloudSpeechToTextDomain } from './cloud-speech-to-text.domain';

/**
 * Cloud Speech-to-Text error
 */
export const cloudSpeechToTextError = createErrorType(cloudSpeechToTextDomain, {});
