import { Observable } from 'rxjs';

export function getCredential(options?: CredentialRequestOptions): Observable<Credential> {
  return navigator.credentials.get(options);
}
