import { type CompilerOptions } from 'typescript';

/**
 * tsconfig.json
 */
export interface TsConfigJson {
  readonly extends?: string;
  readonly compilerOptions?: CompilerOptions;
}
