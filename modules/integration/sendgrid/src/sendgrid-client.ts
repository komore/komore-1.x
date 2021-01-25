import { Client } from '@sendgrid/client';
import { Observable } from 'rxjs';

/**
 * SendGrid client
 */
export interface SendGridClient {
  <ResponseType>(method: Method, url: string, body?: unknown): Observable<ResponseType>;
}

type Method = NonNullable<Parameters<Client['request']>[0]['method']>;
