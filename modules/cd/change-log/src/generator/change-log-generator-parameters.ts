import { type GitTagName } from '@komore/git';

/**
 * Change log generator parameters
 */
export interface ChangeLogGeneratorParameters {
  /**
   * Previous tag name
   *
   * @note Defaults to the latest tag in the repository
   */
  readonly previousTagName?: GitTagName;
  /**
   * Release date time
   *
   * @note Defaults to the current date and time
   */
  readonly releaseDateTime?: Temporal.ZonedDateTime;
  /**
   * Tag name
   *
   * @note Defaults to `'v${version}'`
   */
  readonly tagName?: GitTagName;
  /**
   * Version name
   */
  readonly version: string;
}
