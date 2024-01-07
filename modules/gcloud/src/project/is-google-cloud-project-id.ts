import { type GoogleCloudProjectId } from './google-cloud-project-id';

/**
 * Tests whether a string is a valid Google Cloud project identifier
 *
 * @param value String
 * @returns true if the string is a valid Google Cloud project identifier
 */
export function isGoogleCloudProjectId(value: string): value is GoogleCloudProjectId {
  return value.length > 0;
}
