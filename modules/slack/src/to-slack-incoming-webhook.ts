import { type HttpClient } from '@komore/http/client';

export function toSlackIncomingWebhook(webhookUrl: URL, httpClient: HttpClient): Observable<unknown> {
  const headers = new Headers({
    'content-type': 'application/json',
  });
  httpClient({
    method: 'POST',
    url: webhookUrl,
    headers: new Headers(),
  });
}
