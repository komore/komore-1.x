import { type MfaAuthenticatorType } from '../mfa-authenticator-type';

/**
 * Add authenticator parameters
 */
export interface AddAuthenticatorParameters {
  readonly authenticatorTypes: ReadonlyArray<MfaAuthenticatorType>;
}
