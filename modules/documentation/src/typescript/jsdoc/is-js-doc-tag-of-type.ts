import { type JSDocTag, type KindToNodeMappings, type SyntaxKind } from 'ts-morph';

type JSDocTagSyntaxKind = SyntaxKind.JSDocParameterTag | SyntaxKind.JSDocTemplateTag | SyntaxKind.JSDocReturnTag;

export function isJSDocTagOfType<Kind extends JSDocTagSyntaxKind>(
  syntaxKind: Kind
): (jsDocTag: JSDocTag) => jsDocTag is KindToNodeMappings[Kind] {
  return (jsDocTag: JSDocTag): jsDocTag is KindToNodeMappings[Kind] => jsDocTag.getKind() === syntaxKind;
}
