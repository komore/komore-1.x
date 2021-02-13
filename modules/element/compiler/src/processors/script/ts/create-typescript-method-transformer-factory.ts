import { recordLogEvent } from '@komore/observability/logging';
import type { FunctionDeclaration, SourceFile, TransformerFactory, Visitor } from 'typescript';
import { getCombinedModifierFlags, isFunctionDeclaration, ModifierFlags, visitEachChild } from 'typescript';
import type { ElementMethodDefinition } from '../../../definition/element-method-definition';
import type { ElementMethodDefinitionRecorder } from '../../../definition/element-method-definition-recorder';
import { exportedAnynomousFunctionAsElementMethod } from '../../../element-compiler-logs';

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
          const methodDefinition = processExportedFunctionDeclaration(functionDeclaration);
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

/**
 * Processes an exported function declaration
 * @param functionDeclaration Function declaration
 * @returns Element method definition
 */
function processExportedFunctionDeclaration(
  functionDeclaration: FunctionDeclaration
): ElementMethodDefinition | undefined {
  const name = functionDeclaration.name;

  if (name === undefined) {
    recordLogEvent(exportedAnynomousFunctionAsElementMethod());
    return;
  }

  const functionName = name.text;

  return {
    functionDeclaration,
    functionName
  };
}
