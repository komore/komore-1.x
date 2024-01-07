import { type GoogleCloudProjectId } from '@komore/gcloud';

/**
 * Cloud Speech-to-Text client options
 */
export interface CloudSpeechToTextClientOptions {
  /**
   * Endpoint URL
   */
  readonly endpointUrl: URL;
  /**
   * Google Cloud project identifier
   */
  readonly projectId: GoogleCloudProjectId;
}
