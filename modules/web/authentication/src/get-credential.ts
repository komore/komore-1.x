import { defer, type Observable } from '@komore/reactive';

export function getCredential(options?: CredentialRequestOptions): Observable<Credential | null> {
  return defer(() => navigator.credentials.get(options));
}
