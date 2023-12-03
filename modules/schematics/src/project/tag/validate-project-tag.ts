import { schematicsError } from '../../schematics.error';
import { isProjectTag } from './is-project-tag';
import { type ProjectTag } from './project-tag';

/**
 * Validates a value is a project tag
 *
 * @param projectTag Project tag
 */
export function validateProjectTag(projectTag: string): asserts projectTag is ProjectTag {
  if (!isProjectTag(projectTag)) {
    throw schematicsError.invalidProjectTag({ projectTag });
  }
}
