import { type Observable } from '@komore/reactive';
import { type Client } from '@sendgrid/client';

/**
 * SendGrid client
 */
export interface SendGridClient {
  <ResponseType>(method: Method, url: string, body?: unknown): Observable<ResponseType>;
}

type Method = NonNullable<Parameters<Client['request']>[0]['method']>;
