import {
  type GetTranscriptionJobCommand,
  type ListLanguageModelsCommand,
  type ListTranscriptionJobsCommand,
} from '@aws-sdk/client-transcribe';

import { awsQueryProperties, createAwsQueryType } from '@komore/aws';

import { transcribeDomain } from './transcribe.domain';

/**
 * Transcribe query
 */
export const transcribeQuery = createAwsQueryType(transcribeDomain, {
  /**
   * Returns information about the specified transcription job
   *
   * @see {@link https://docs.aws.amazon.com/transcribe/latest/APIReference/API_GetTranscriptionJob.html GetTranscriptionJob}
   */
  getTranscriptionJob: awsQueryProperties<GetTranscriptionJobCommand>(),
  /**
   * Returns a list of custom language models matching the specified criteria
   *
   * @see {@link https://docs.aws.amazon.com/transcribe/latest/APIReference/API_ListLanguageModels.html ListLanguageModels}
   */
  listLanguageModels: awsQueryProperties<ListLanguageModelsCommand>(),
  /**
   * Returns a list of transcription jobs matching the specified criteria
   *
   * @see {@link https://docs.aws.amazon.com/transcribe/latest/APIReference/API_ListTranscriptionJobs.html ListTranscriptionJobs}
   */
  listTranscriptionJobs: awsQueryProperties<ListTranscriptionJobsCommand>(),
});
