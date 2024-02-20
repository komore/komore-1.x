import { type SendGridApiResponseWithWarning } from './api/sendgrid-api-response-with-warning';

/**
 * SendGrid API client
 */
export interface SendGridApiClient {
  <ResponseType>(method: 'DELETE' | 'GET', path: string): Observable<SendGridApiResponseWithWarning<ResponseType>>;
  <ResponseType>(
    method: 'POST' | 'PUT',
    path: string,
    payload: unknown
  ): Observable<SendGridApiResponseWithWarning<ResponseType>>;
}
