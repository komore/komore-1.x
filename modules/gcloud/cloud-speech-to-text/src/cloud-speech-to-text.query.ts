import { createQueryType, queryProperties } from '@komore/query';

import { cloudSpeechToTextDomain } from './cloud-speech-to-text.domain';

/**
 * Cloud Speech-to-Text query
 */
export const cloudSpeechToTextQuery = createQueryType(cloudSpeechToTextDomain, {
  listRecognizers: queryProperties(),
});
