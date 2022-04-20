import { EMPTY, type Observable } from '@komore/reactive';
import { type SourceFile } from 'typescript';
import { type GherkinDocument } from '@cucumber/messages';

/**
 * Creates a function that generates a TypeScript source file from a Gherkin document
 */
export function gherkinDocumentToSourceFile(): (document: GherkinDocument) => Observable<SourceFile> {
  return document => {
    console.log('doc', document.comments);
    return EMPTY;
  }
}
