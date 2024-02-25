import { type typeScriptTargets } from './typescript-targets';

/**
 * TypeScript target
 */
export type TypeScriptTarget = (typeof typeScriptTargets)[number];
