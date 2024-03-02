import { type GcloudProjectId } from './gcloud-project-id';
import { validateGcloudProjectId } from './validate-gcloud-project-id';

/**
 * Returns a string as a Google Cloud project identifier
 *
 * @param projectId Project identifier string
 * @returns Google Cloud project identifier
 */
export function asGcloudProjectId(projectId: string): GcloudProjectId {
  validateGcloudProjectId(projectId);
  return projectId;
}
