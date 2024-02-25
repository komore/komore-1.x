import { type TypeScriptConfigurationCompilerOptions } from './options/typescript-configuration-compiler-options';
import { type TypeScriptProjectReferenceConfiguration } from './typescript-project-reference-configuration';

/**
 * TypeScript configuration
 */
export interface TypeScriptConfiguration {
  /**
   * Whether to compile on save
   */
  readonly compileOnSave: boolean;
  /**
   * Compiler options
   */
  readonly compilerOptions: TypeScriptConfigurationCompilerOptions;
  /**
   * File patterns to exclude
   */
  readonly exclude: ReadonlyArray<string>;
  /**
   * Extended TypeScript configuration path
   */
  readonly extends?: string;
  /**
   * Files to process
   */
  readonly files: ReadonlyArray<string>;
  /**
   * File patterns to include
   */
  readonly include: ReadonlyArray<string>;
  /**
   * Project references
   */
  readonly references: ReadonlyArray<TypeScriptProjectReferenceConfiguration>;
}
