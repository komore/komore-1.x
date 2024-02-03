import { type protos } from '@google-cloud/language';

import { deferPromise, map } from '@komore/reactive';

import { type CloudNaturalLanguageClient } from '../cloud-natural-language-client';

/**
 * Analyzes a text or document's syntax
 *
 * @param client Cloud Natural Language client
 * @param options Options
 * @returns Syntax analysis result
 */
export function analyzeSyntax(
  client: CloudNaturalLanguageClient,
  options?: protos.google.cloud.language.v1.IAnalyzeSyntaxRequest
): Observable<protos.google.cloud.language.v1.IAnalyzeSyntaxResponse> {
  return deferPromise(() => client.client.analyzeSyntax(options)).pipe(map(([response]) => response));
}
