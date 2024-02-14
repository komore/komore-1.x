import { createDocumentFragment } from '@komore/element/testing';
import { empty, firstValueFrom } from '@komore/reactive';
import { feature, thrown } from '@komore/testing';

import { documentFragmentToParsedSource } from './document-fragment-to-parsed-source';
import { type ScriptResourceLoader } from './script/script-resource-loader';
import { type StyleResourceLoader } from './style/style-resource-loader';

const nullScriptResourceLoader: ScriptResourceLoader = () => empty;
const nullStyleResourceLoader: StyleResourceLoader = () => empty;

feature('Parse source', {
  async 'can parse a simple element'() {
    given: 'a document fragment with a single root template element';
    const documentFragment = createDocumentFragment('<test-element></test-element>');

    when: 'creating a function that parses the source';
    const func = documentFragmentToParsedSource(nullScriptResourceLoader, nullStyleResourceLoader);
    and: 'calling the function';
    const parsedSource$ = func(documentFragment);
    const parsedSource = await firstValueFrom(parsedSource$);

    then: 'the source is correctly parsed';
    parsedSource.scriptElements.length === 0;
    parsedSource.styleElements.length === 0;
    parsedSource.parsedElementTemplate.tagName === 'test-element';
  },
  async 'can parse an element with scripts and styles'() {
    given: 'a document fragment with script and style elements';
    const documentFragment = createDocumentFragment(`
      <script></script>
      <style></style>
      <test-element></test-element>
    `);

    when: 'creating a function that parses the source';
    const func = documentFragmentToParsedSource(nullScriptResourceLoader, nullStyleResourceLoader);
    and: 'calling the function';
    const parsedSource$ = func(documentFragment);
    const parsedSource = await firstValueFrom(parsedSource$);

    then: 'the source is correctly parsed';
    parsedSource.scriptElements.length === 1;
    parsedSource.styleElements.length === 1;
    parsedSource.parsedElementTemplate.tagName === 'test-element';
  },
  async 'throws an error when multiple root template elements are found'() {
    given: 'a document fragment with multiple root template elements';
    const documentFragment = createDocumentFragment(`
      <script></script>
      <style></style>
      <test-element1></test-element1>
      <test-element2></test-element2>
    `);

    when: 'creating a function that parses the source';
    const func = documentFragmentToParsedSource(nullScriptResourceLoader, nullStyleResourceLoader);
    and: 'calling the function';
    const parsedSource$ = func(documentFragment);

    expect: 'an error to be thrown when parsing the source';
    await firstValueFrom(parsedSource$);
    const e = thrown();
    e.message === 'an element template cannot have more than one root element (found: test-element1, test-element2)';
  },
});
