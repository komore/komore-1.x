import { AuthenticatorType } from '../authenticator-type';

/**
 * Add authenticator parameters
 */
type AddAuthenticatorParameters = Readonly<{
  authenticatorTypes: ReadonlyArray<AuthenticatorType>;
}>;
