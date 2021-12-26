import { recordLogEvent } from '@komore/observability/logging';
import { type FunctionDeclaration } from 'typescript';
import { type ElementMethodDefinition } from '../../../definition/element-method-definition';
import { exportedAnynomousFunctionAsElementMethod } from '../../../element-compiler-logs';

/**
 * Processes an exported TypeScript function declaration
 * @param functionDeclaration Function declaration
 * @returns Element method definition
 */
export function processExportedTypeScriptFunctionDeclaration(
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
