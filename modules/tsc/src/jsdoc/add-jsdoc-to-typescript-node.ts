import { SyntaxKind, addSyntheticLeadingComment } from 'typescript';

import { type TypeScriptContext } from '../context/typescript-context';
//import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptNode } from '../node/typescript-node';
import { type AddJsDocToTypeScriptNodeParameters } from './add-jsdoc-to-typescript-node-parameters';

export function addJsDocToTypeScriptNode(
  _context: TypeScriptContext
): <T extends TypeScriptNode>(parameters: AddJsDocToTypeScriptNodeParameters<T>) => T {
  return ({ documentation, node }) => {
    return addSyntheticLeadingComment(node, SyntaxKind.MultiLineCommentTrivia, documentation, true);
  };
}
