import { type ProjectTaskConfigurationsJson } from './project-task-configurations-json';

/**
 * Project configuration JSON
 */
export interface ProjectConfigurationJson {
  /**
   * Domain
   */
  readonly domain?: string;
  /**
   * Tasks
   */
  readonly tasks?: ProjectTaskConfigurationsJson;
  /**
   * List of tags
   */
  readonly tags?: ReadonlyArray<string>;
  /**
   * Project type
   */
  readonly type?: string;
}
