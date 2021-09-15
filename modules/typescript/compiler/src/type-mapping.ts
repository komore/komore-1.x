import type { TypeNode } from 'typescript';

/**
 * Type mapping
 */
export interface TypeMapping {
  readonly name: string;
  readonly type: TypeNode;
}
