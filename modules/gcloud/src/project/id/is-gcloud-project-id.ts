import { type GcloudProjectId } from './gcloud-project-id';

/**
 * Tests whether a string is a valid Google Cloud project identifier
 *
 * @param value String
 * @returns true if the string is a valid Google Cloud project identifier
 */
export function isGcloudProjectId(value: string): value is GcloudProjectId {
  return value.length > 0;
}
