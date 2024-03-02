import { gcloudTypeError } from '../../gcloud-type.error';
import { type GcloudProjectId } from './gcloud-project-id';
import { isGcloudProjectId } from './is-gcloud-project-id';

/**
 * Validates that a string is a valid Google Cloud project identifier
 *
 * @param projectId String
 */
export function validateGcloudProjectId(projectId: string): asserts projectId is GcloudProjectId {
  if (!isGcloudProjectId(projectId)) {
    throw gcloudTypeError.invalidProjectId({ projectId });
  }
}
