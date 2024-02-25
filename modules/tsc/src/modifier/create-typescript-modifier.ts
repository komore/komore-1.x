import { SyntaxKind } from 'typescript';

import { type ReadonlyRecord } from '@komore/typescript';

import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptModifier } from './typescript-modifier';
import { type TypeScriptModifierName } from './typescript-modifier-name';

/**
 * Creates a function that creates a TypeScript modifier
 *
 * @param context TypeScript context
 * @returns Function that creates a TypeScript modifier
 */
export function createTypeScriptModifier(
  context: TypeScriptContext
): (modifierName: TypeScriptModifierName) => TypeScriptModifier {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return modifierName => {
    const syntaxKind = syntaxKindByModifierName[modifierName];
    return factory.createModifier(syntaxKind);
  };
}

/**
 * Syntax kind by modifier name
 */
const syntaxKindByModifierName: ReadonlyRecord<
  TypeScriptModifierName,
  Parameters<TypeScriptContext[typeof typeScriptContextNodeFactorySymbol]['createModifier']>[0]
> = {
  export: SyntaxKind.ExportKeyword,
  readonly: SyntaxKind.ReadonlyKeyword,
};
