import { type mfaAuthenticatorTypes } from './mfa-authenticator-types';

/**
 * MFA authenticator type
 */
export type MfaAuthenticatorType = (typeof mfaAuthenticatorTypes)[number];
