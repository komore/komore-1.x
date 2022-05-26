import { type RustEdition } from '../../metadata/rust-edition';

/**
 * Application schema
 */
export interface ApplicationSchema {
  /**
   * Application name
   */
  readonly name: string;
  /**
   * Directory for the new application
   */
  readonly directory: string;
  /**
   * Rust edition to use
   */
  readonly edition: RustEdition;
  /**
   * List of tags
   */
  readonly tags?: string;
}
