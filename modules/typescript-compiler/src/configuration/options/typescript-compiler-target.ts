import { type typeScriptCompilerTargets } from './typescript-compiler-targets';

/**
 * TypeScript compiler target
 */
export type TypeScriptCompilerTarget = (typeof typeScriptCompilerTargets)[number];
