import { TypeScriptNode } from "../node/typescript-node";
import { typeScriptNodeToSourceString } from "./typescript-node-to-source-string";

export function isTypeScriptSourceText(sourceText: string): (node: TypeScriptNode) => boolean {
  const source = typeScriptNodeToSourceString({ });
  return node =>
}
  toBeSource(received: Node, expected: string) {
    const source = generateSource(this.currentTestName, received);
    return generateResult('toBeSource', this.utils, source, expected);
  },

}
