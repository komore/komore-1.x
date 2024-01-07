import { type QueryFromType, type QueryHandler } from '@komore/query';

import { type cloudSpeechToTextQuery } from '../cloud-speech-to-text.query';

/**
 * Cloud Speech-to-Text query handler
 */
export type CloudSpeechToTextQueryHandler = QueryHandler<QueryFromType<typeof cloudSpeechToTextQuery>>;
