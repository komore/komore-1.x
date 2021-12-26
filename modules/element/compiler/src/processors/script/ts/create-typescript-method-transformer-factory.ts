import {
  getCombinedModifierFlags,
  isFunctionDeclaration,
  ModifierFlags,
  type SourceFile,
  type TransformerFactory,
  visitEachChild,
  type Visitor
} from 'typescript';
import { type ElementMethodDefinitionRecorder } from '../../../definition/element-method-definition-recorder';
import { processExportedTypeScriptFunctionDeclaration } from './process-exported-typescript-function-declaration';

/**
 * Creates a TypeScript transformer for element method statements
 * @param methodDefinitionRecorder Method definition recorder
 * @returns TypeScript method transformer factory
 */
export function createTypeScriptMethodTransformerFactory(
  methodDefinitionRecorder: ElementMethodDefinitionRecorder
): TransformerFactory<SourceFile> {
  return transformationContext => {
    //const { factory } = transformationContext;
    const visitor: Visitor = node => {
      // createFunctionDeclaration with modifier SyntaxKind.ExportKeyword
      // createVariableStatement where the type is a function?
      if (isFunctionDeclaration(node)) {
        //factory.createModifier()
        const functionDeclaration = node;
        const modifierFlags = getCombinedModifierFlags(node);

        if (modifierFlags & ModifierFlags.Export) {
          const methodDefinition = processExportedTypeScriptFunctionDeclaration(functionDeclaration);
          if (methodDefinition !== undefined) {
            methodDefinitionRecorder(methodDefinition);      
          }
        }
      }

      return node;
    };

    return node => visitEachChild(node, visitor, transformationContext);
  };
}
