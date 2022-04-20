import { SyntaxKind, type JSDoc, type JSDocParameterTag } from 'ts-morph';
import { isJSDocTagOfType } from './is-js-doc-tag-of-type';
import { type ParsedJsDoc } from './parsed-js-doc';

/**
 * Parses a JSDoc node
 *
 * @param jsDoc JSDoc node
 * @returns Parsed JSDoc
 */
export function parseJsDoc(jsDoc: JSDoc | undefined): ParsedJsDoc {
  const description = jsDoc?.getDescription()?.trim() ?? '';
  const jsDocTags = jsDoc?.getTags() ?? [];
  const jsDocParameterTags = jsDocTags.filter(isJSDocTagOfType(SyntaxKind.JSDocParameterTag));
  const jsDocReturnTag = jsDocTags.filter(isJSDocTagOfType(SyntaxKind.JSDocReturnTag));
  const parameters = jsDocParameterTags.length > 0 ? jsDocParameterTags.reduce(toParameters, {}) : undefined;
  const returnValue = jsDocReturnTag[0]?.getCommentText()?.trim();
  return {
    description,
    parameters,
    returnValue,
  };
}

function toParameters(map: Record<string, string>, curr: JSDocParameterTag): Record<string, string> {
  const name = curr.getName();
  const description = curr.getCommentText()?.trim() ?? '';
  map[name] = description;
  return map;
}
