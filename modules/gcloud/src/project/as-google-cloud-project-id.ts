import { type GoogleCloudProjectId } from './google-cloud-project-id';
import { validateGoogleCloudProjectId } from './validate-google-cloud-project-id';

/**
 * Returns a string as a Google Cloud project identifier
 *
 * @param projectId Project identifier string
 * @returns Google Cloud project identifier
 */
export function asGoogleCloudProjectId(projectId: string): GoogleCloudProjectId {
  validateGoogleCloudProjectId(projectId);
  return projectId;
}
