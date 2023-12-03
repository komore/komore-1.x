import { type ProjectName } from './name/project-name';

export interface ProjectConfigurationOptions {
  /**
   * Project name
   */
  readonly projectName: ProjectName;
  /**
   * Project configuraton path
   */
  readonly projectConfigurationPath: string;
  /**
   * Project path
   */
  readonly projectPath: string;
}
