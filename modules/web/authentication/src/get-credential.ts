import type { Observable } from '@komore/reactive';
import { defer } from '@komore/reactive';

export function getCredential(options?: CredentialRequestOptions): Observable<Credential | null> {
  return defer(() => navigator.credentials.get(options));
}
