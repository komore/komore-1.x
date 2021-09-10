import type { Expression, NodeFactory } from "typescript";
import type { CompilerContextImport } from "./compiler-context-import";

/**
 * Compiler context
 */
export interface CompilerContext {
  readonly factory: NodeFactory;
  readonly import: (options: CompilerContextImport) => Expression;
}
