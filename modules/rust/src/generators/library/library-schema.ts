import { type RustEdition } from '../../metadata/rust-edition';

/**
 * Library schema
 */
export interface LibrarySchema {
  /**
   * Library name
   */
  readonly name: string;
  /**
   * Directory for the new library
   */
  readonly directory?: string;
  /**
   * Rust edition to use
   */
  readonly edition?: RustEdition;
  /**
   * Enable procedural macros
   */
  readonly proceduralMacros?: boolean;
  /**
   * List of tags
   */
  readonly tags?: string;
}
