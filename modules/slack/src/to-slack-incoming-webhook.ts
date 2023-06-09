import { type Observable } from '@komore/reactive';
import { type HttpClient } from '@komore/web/http';

export function toSlackIncomingWebhook(webhookUrl: string, httpClient: HttpClient): Observable<unknown> {
  const headers = new Headers({
    'content-type': 'application/json'
  });
  httpClient({
    method: 'POST',
    url: webhookUrl,
    headers: new Headers()
  });
}
