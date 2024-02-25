import { type TypeScriptContext } from '../context/typescript-context';
import { typeScriptContextNodeFactorySymbol } from '../context/typescript-context-node-factory-symbol';
import { type TypeScriptLiteralType } from './typescript-literal-type';

export function createTypeScriptLiteralType(context: TypeScriptContext): (literal: string) => TypeScriptLiteralType {
  const { [typeScriptContextNodeFactorySymbol]: factory } = context;
  return literal => {
    const expression = factory.createStringLiteral(literal, true);
    return factory.createLiteralTypeNode(expression);
  };
}
