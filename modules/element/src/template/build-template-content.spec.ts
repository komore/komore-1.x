import { buildTemplateContent } from './build-template-content';

function test(literals: TemplateStringsArray, ..._: ReadonlyArray<unknown>): string {
  return buildTemplateContent(literals);
}

/**
 * Build template content function specification
 */
describe('Build template content', () => {
  it('works with empty templates', () => {
    // given: an empty template
    const str = test``;
    // expect: the string to be empty
    expect(str.length).toBe(0);
  });

  it('supports attribute bindings', () => {
    // given: a template with an attribute binding
    const str = test`<input type=${1}>`;
    // expect:
    expect(str).toBe('<input type$k$=>');
  });

  it('supports content bindings', () => {
    // given: a template with a content binding
    const str = test`<div>test ${1} content</div>';
  });
});
