import { type typeScriptCompilerModules } from './typescript-compiler-modules';

/**
 * TypeScript compiler module
 */
export type TypeScriptCompilerModule = (typeof typeScriptCompilerModules)[number];
