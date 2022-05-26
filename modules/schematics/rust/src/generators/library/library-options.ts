import { type RustEdition } from '../../metadata/rust-edition';

/**
 * Library options
 */
export interface LibraryOptions {
  /**
   * Directory for the new library
   */
  readonly directory: string;
  /**
   * Rust edition to use
   */
  readonly edition: RustEdition;
  /**
   * Library name
   */
  readonly name: string;
  /**
   * Enable procedural macros
   */
  readonly proceduralMacros: boolean;
  /**
   * Project root
   */
  readonly root: string;
  /**
   * List of tags
   */
  readonly tags: ReadonlyArray<string>;
}
