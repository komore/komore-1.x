import { gcloudError } from '../gcloud.error';
import { type GoogleCloudProjectId } from './google-cloud-project-id';
import { isGoogleCloudProjectId } from './is-google-cloud-project-id';

/**
 * Validates that a string is a valid Google Cloud project identifier
 *
 * @param projectId String
 */
export function validateGoogleCloudProjectId(projectId: string): asserts projectId is GoogleCloudProjectId {
  if (!isGoogleCloudProjectId(projectId)) {
    throw gcloudError.invalidProjectId({ projectId });
  }
}
