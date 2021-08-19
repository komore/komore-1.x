import { toMarkdownMetadataDefinition } from './to-markdown-metadata-definition';

describe('To Markdown metadata definition', () => {
  it.each([
    ['[//]: #test-name (test-value)', 'test-name', 'test-value'],
    ['[//]: #TeSt-NaMe (test-value)', 'test-name', 'test-value'],
    ['[//]: #test-name (test-value)\n', 'test-name', 'test-value'],
    ['[//]: #test-name (test value)', 'test-name', 'test value'],
    ['[//]: #test-name ( test value \t )', 'test-name', 'test value'],
    ['[//]: #test-name (test value)\n[//]: #extra-name (extra-value)\n', 'test-name', 'test value']
  ])(
    'returns a Markdown metadata definition when given a Markdown metadata string',
    (metadataString, expectedKind, expectedValue) => {
      given: 'a Markdown metadata string';
      when: 'getting a Markdown metadata definition';
      const metadataDefinition = toMarkdownMetadataDefinition(metadataString);
      expect: 'the correct kind and value to have been picked';
      const { kind, value } = metadataDefinition;
      expect(kind).toBe(expectedKind);
      expect(value).toBe(expectedValue);
    }
  );
});
