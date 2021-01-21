import { createDocumentFragment } from '@komore/element/testing';
import { EMPTY, lastValueFrom } from 'rxjs';
import { parseSource } from './parse-source';
import type { ScriptResourceLoader } from './script/script-resource-loader';
import type { StyleResourceLoader } from './style/style-resource-loader';

describe('Parse source', () => {
  const nullScriptResourceLoader: ScriptResourceLoader = () => EMPTY;
  const nullStyleResourceLoader: StyleResourceLoader = () => EMPTY;

  it('can parse a simple element', async () => {
    given: 'a document fragment with a single root template element'
    const documentFragment = createDocumentFragment('<test-element></test-element>');
    when: 'parsing the source'
    const parsedSource$ = parseSource(documentFragment, nullScriptResourceLoader, nullStyleResourceLoader);
    const parsedSource = await lastValueFrom(parsedSource$);
    then: 'the source is correctly parsed'
    expect(parsedSource.scriptElements.length).toBe(0);
    expect(parsedSource.styleElements.length).toBe(0);
    expect(parsedSource.parsedTemplateElement.tagName).toBe('test-element');
  });

  it('can parse an element with scripts and styles', async () => {
    given: 'a document fragment with script and style elements'
    const documentFragment = createDocumentFragment(`
      <script></script>
      <style></style>
      <test-element></test-element>
    `);
    when: 'parsing the document fragment'
    const parsedSource$ = parseSource(documentFragment, nullScriptResourceLoader, nullStyleResourceLoader);
    const parsedSource = await lastValueFrom(parsedSource$);
    then: 'the source is correctly parsed'
    expect(parsedSource.scriptElements.length).toBe(1);
    expect(parsedSource.styleElements.length).toBe(1);
    expect(parsedSource.parsedTemplateElement.tagName).toBe('test-element');
  });

  it('throws an error when multiple root template elements are found', () => {
    given: 'a document fragment with multiple root template elements'
    const documentFragment = createDocumentFragment(`
      <script></script>
      <style></style>
      <test-element1></test-element1>
      <test-element2></test-element2>
    `);
    when: 'parsing the document fragment'
    const parsedSource$ = parseSource(documentFragment, nullScriptResourceLoader, nullStyleResourceLoader);
    expect: 'an error to be thrown when parsing the source'
    expect(lastValueFrom(parsedSource$)).rejects.toThrowError(
      'an element template cannot have more than one root element (found: test-element1, test-element2)'
    );
  });
});
