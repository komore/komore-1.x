import type { FunctionDeclaration } from 'typescript';

/**
 * Element method definition
 */
export interface ElementMethodDefinition {
  readonly functionDeclaration: FunctionDeclaration;
  readonly functionName: string;
}
