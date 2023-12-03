import { factory } from 'typescript';
import { createDocumentCreateElementCall } from './create-document-create-element-call';

describe('Create document create element call', () => {
  it('creates a correct document.createElement() call expression', () => {
    given: 'a tag name';
    const tagName = 'p';
    when: 'creating a document.createElement call';
    const callExpression = createDocumentCreateElementCall(factory, tagName);
    expect: 'the correct call expression to have been created';
    expect(callExpression).toBeInlineSource('document.createElement(\'p\')');
  });
});
