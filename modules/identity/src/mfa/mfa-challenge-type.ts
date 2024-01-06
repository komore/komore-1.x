import { type mfaChallengeTypes } from './mfa-challenge-types';

/**
 * MFA challenge type
 */
export type MfaChallengeType = (typeof mfaChallengeTypes)[number];
