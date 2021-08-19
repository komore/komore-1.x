import { isMarkdownMetadataDefinition } from './is-markdown-metadata-definition';

describe('Is Markdown metadata definition', () => {
  it.each([
    ['[//]:', true],
    ['[//]:abc123', true],
    ['[//]', false],
    ['[//]abc123', false],
    ['[]:', false],
    ['test', false]
  ])('returns true when a definition string is a Markdown metadata definition', (definitionString, expectedResult) => {
    given: 'a definition string';
    when: 'testing whether the definition string is a Markdown metadata definition';
    const result = isMarkdownMetadataDefinition(definitionString);
    expect: 'true to be returned if the definition string is a Markdown metadata definition';
    expect(result).toBe(expectedResult);
  });
});
