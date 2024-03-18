import { type CloudBigtableApiClient } from '@komore/gcloud/cloud-bigtable';

/**
 * Cloud Bigtable event repository options
 */
export interface CloudBigtableEventRepositoryOptions {
  /**
   * Cloud Bigtable API client
   */
  readonly apiClient: CloudBigtableApiClient;
}
