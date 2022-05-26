import { type RustEdition } from '../../metadata/rust-edition';

/**
 * Application options
 */
export interface ApplicationOptions {
  /**
   * Directory for the new library
   */
  readonly directory: string;
  /**
   * Rust edition to use
   */
  readonly edition: RustEdition;
  /**
   * Application name
   */
  readonly name: string;
  /**
   * Project root
   */
  readonly root: string;
  /**
   * List of tags
   */
  readonly tags: ReadonlyArray<string>;
}
