import { schematicsError } from '../../schematics.error';
import { isProjectName } from './is-project-name';
import { type ProjectName } from './project-name';

export function validateProjectName(projectName: string): asserts projectName is ProjectName {
  if (!isProjectName(projectName)) {
    throw schematicsError.invalidProjectName({ projectName });
  }
}
