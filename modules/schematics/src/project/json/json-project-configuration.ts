import { type ProjectType } from '../project-type';
import { type JsonProjectTaskConfigurations } from './json-project-task-configurations';

/**
 * JSON project configuration
 */
export interface JsonProjectConfiguration {
  /**
   * Domain
   */
  readonly domain?: string;
  /**
   * Tasks
   */
  readonly tasks?: JsonProjectTaskConfigurations;
  /**
   * List of tags
   */
  readonly tags?: ReadonlyArray<string>;
  /**
   * Project type
   */
  readonly type?: ProjectType;
}
