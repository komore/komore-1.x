import { type ProjectTaskConfigurationsJson } from './project-task-configurations-json';

/**
 * Project configuration JSON
 */
export interface ProjectConfigurationJson {
  /**
   * Domain
   */
  readonly domain: string;
  /**
   * List of tags
   */
  readonly tags?: ReadonlyArray<string>;
  /**
   * Tasks
   */
  readonly tasks?: ProjectTaskConfigurationsJson;
  /**
   * Project type
   */
  readonly type: string;
}
