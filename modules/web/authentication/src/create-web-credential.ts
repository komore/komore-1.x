import { isNotNull } from '@komore/functional';
import { deferPromise, throwUnless, type Observable } from '@komore/reactive';

type PasswordCredentialOptions = Required<Pick<CredentialCreationOptions, 'password'>>;
type PublicKeyCredentialOptions = Required<Pick<CredentialCreationOptions, 'publicKey'>>;
type FederatedCredentialOptions = Required<Pick<CredentialCreationOptions, 'federated'>>;

export function createWebCredential(options: PasswordCredentialOptions): Observable<PasswordCredential>;
export function createWebCredential(options: PublicKeyCredentialOptions): Observable<PublicKeyCredential>;
export function createWebCredential(options: FederatedCredentialOptions): Observable<FederatedCredential>;

export function createWebCredential(options: CredentialCreationOptions): Observable<Credential> {
  return deferPromise(() => navigator.credentials.create(options)).pipe(
    throwUnless(isNotNull, () => new Error('credentials creation failed'))
  );
}
