import { deferPromise, type Observable } from '@komore/reactive';

export function getWebCredential(options?: CredentialRequestOptions): Observable<Credential | null> {
  return deferPromise(() => navigator.credentials.get(options));
}
