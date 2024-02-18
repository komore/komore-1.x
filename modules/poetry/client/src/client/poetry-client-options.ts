import { type PoetryCliClient } from '@komore/poetry';

/**
 * Poetry client options
 */
export interface PoetryClientOptions {
  /**
   * Poetry CLI client
   */
  readonly cliClient: PoetryCliClient;
}
