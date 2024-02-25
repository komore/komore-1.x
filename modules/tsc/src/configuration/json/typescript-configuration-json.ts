import { type TypeScriptCompilerOptions } from '../options/typescript-compiler-options';
import { type TypeScriptProjectReferenceConfigurationJson } from './typescript-project-reference-configuration-json';

/**
 * TypeScript configuration JSON
 *
 * @private
 */
export interface TypeScriptConfigurationJson {
  /**
   * Whether to compile on save
   */
  readonly compileOnSave?: boolean;
  /**
   * Compiler options
   */
  readonly compilerOptions?: TypeScriptCompilerOptions;
  /**
   * File patterns to exclude
   */
  readonly exclude?: ReadonlyArray<string>;
  /**
   * Extended configuration path
   */
  readonly extends?: string;
  /**
   * Files to process
   */
  readonly files?: ReadonlyArray<string>;
  /**
   * File patterns to include
   */
  readonly include?: ReadonlyArray<string>;
  /**
   * Project references
   */
  readonly references?: ReadonlyArray<TypeScriptProjectReferenceConfigurationJson>;
}
