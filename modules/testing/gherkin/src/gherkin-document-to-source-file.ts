import { type GherkinDocument } from '@cucumber/messages';
import { type SourceFile } from 'typescript';

import { empty } from '@komore/reactive';

/**
 * Creates a function that generates a TypeScript source file from a Gherkin document
 */
export function gherkinDocumentToSourceFile(): (document: GherkinDocument) => Observable<SourceFile> {
  return document => {
    console.log('doc', document.comments);
    return empty;
  };
}
