import { schematicsError } from '../../schematics.error';
import { isProjectType } from './is-project-type';
import { type ProjectType } from './project-type';

/**
 * Validates a value is a project type
 *
 * @param projectType Project type
 */
export function validateProjectType(projectType: string): asserts projectType is ProjectType {
  if (!isProjectType(projectType)) {
    throw schematicsError.invalidProjectType({ projectType });
  }
}
