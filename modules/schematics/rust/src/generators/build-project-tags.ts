/**
 * Builds project tags
 * @param tags Tags
 * @returns List of project tags
 */
export function buildProjectTags(tags: string | undefined): ReadonlyArray<string> {
  if (tags === undefined) {
    return [];
  }

  return [tags];
}
