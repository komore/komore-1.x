const COMMENT_START = '<!--';
const COMMENT_END = '-->';
const LAST_ATTRIBUTE_NAME_REGEX = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
const MARKER_ATTRIBUTE_SUFFIX = '$k$';

/**
 * Builds a template's content
 * @param literals List of literals
 * @returns Template content
 */
export function buildTemplateContent(literals: TemplateStringsArray): string {
  if (literals.length === 0) {
    return '';
  }

  const lastLiteralIndex = literals.length - 1;
  let content = '';
  let inComment = false;

  for (let i = 0; i !== lastLiteralIndex; ++i) {
    const literal = literals[i];
    const commentStart = literal.lastIndexOf(COMMENT_START);
    const commentStarted = commentStart !== -1;
    const lastAttributeMatch = LAST_ATTRIBUTE_NAME_REGEX.exec(literal);

    inComment = (inComment || commentStarted) && literal.indexOf(COMMENT_END, commentStarted ? commentStart : 0) !== -1;

    if (lastAttributeMatch === null) {
      //const contentLiteralMarker = inComment ? commentMarker : nodeMarker;
      //content = content + literal + contentLiteralMarker;
    } else {
      const [, attributeLeadingSpaces, attributeName, attributeAssign] = lastAttributeMatch;
      const precedingContent = literal.substr(0, lastAttributeMatch.index);
      console.log('last match', lastAttributeMatch);
      console.log('preceding content', precedingContent);
      content += precedingContent + attributeLeadingSpaces + attributeName + MARKER_ATTRIBUTE_SUFFIX + attributeAssign;
    }
  }

  content += literals[lastLiteralIndex];

  return content;
}
