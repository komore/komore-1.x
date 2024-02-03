import { deferPromise } from '@komore/reactive';

import { type CloudNaturalLanguageClient } from '../cloud-natural-language-client';

export function analyzeSentiment(client: CloudNaturalLanguageClient): Observable<unknown> {
  return deferPromise(() => client.client.analyzeSentiment());
}
