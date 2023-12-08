import { schematicsError } from '../../schematics.error';
import { isProjectName } from './is-project-name';
import { type ProjectName } from './project-name';

/**
 * Validates a value is a project name
 *
 * @param projectName Project name
 */
export function validateProjectName(projectName: unknown): asserts projectName is ProjectName {
  if (!isProjectName(projectName)) {
    throw schematicsError.invalidProjectName({ value: projectName });
  }
}
