import { parseSource } from './parse-source';

describe('Parse source', () => {
  it('works', () => {
    // given: a source with a single root template element
    const source = '<el1></el1>';
    // when: parsing the source
    const parsedSource = parseSource(source);
    // then:
    expect(parsedSource.scriptElements.length).toBe(0);
    expect(parsedSource.styleElements.length).toBe(0);
    expect(parsedSource.templateElement).toBeDefined();
    expect(parsedSource.templateElement.rawTagName).toBe('el1');
  });

  it('throws an error when no root template elements are found', () => {
    // given: a source with no root template elements
  });

  it('throws an error when multiple root template elements are found', () => {
    // given: a source with multiple root template elements
    const source = `
    <script></script>
    <style></style>
    <el1></el1>
    <el2></el2>
    `;
    // expect: an error to be thrown when parsing the source
    expect(() => parseSource(source)).toThrowError(
      'an element template cannot have more than one root element (found: el1, el2)'
    );
  });
});
