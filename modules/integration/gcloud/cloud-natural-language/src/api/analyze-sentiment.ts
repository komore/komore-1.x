import { type CloudNaturalLanguageClient } from '../cloud-natural-language-client';
import { deferPromise, type Observable } from '@komore/reactive';

export function analyzeSentiment(client: CloudNaturalLanguageClient): Observable<unknown> {
  return deferPromise(() => client.client.analyzeSentiment());
}
