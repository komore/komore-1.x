import { type TypeScriptNode } from '../node/typescript-node';

/**
 * Add JsDoc to TypeScript node parameters
 */
export interface AddJsDocToTypeScriptNodeParameters<T extends TypeScriptNode> {
  /**
   * Documentation
   */
  readonly documentation: string;
  /**
   * Node
   */
  readonly node: T;
}
