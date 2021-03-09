import type { Observable } from '@komore/reactive';

// TODO: enable once typings are up-to-date
//export function createCredential(options: Pick<CredentialCreationOptions, 'password'>): Observable<PasswordCredential>;
export function createCredential(options: Pick<CredentialCreationOptions, 'publicKey'>): Observable<PublicKeyCredential>;
export function createCredential(options: Pick<CredentialCreationOptions, 'signal'>)
function createCredentials(options: CredentialCreationOptions): Observable<Credential> {
  navigator.credentials.create(options);
}
navigator.credentials.create()