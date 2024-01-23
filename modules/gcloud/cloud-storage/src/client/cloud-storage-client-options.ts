import { type GoogleCloudProjectId } from '@komore/gcloud';

/**
 * Cloud Storage client options
 */
export interface CloudStorageClientOptions {
  /**
   * Google Cloud project identifier
   */
  readonly projectId: GoogleCloudProjectId;
}
