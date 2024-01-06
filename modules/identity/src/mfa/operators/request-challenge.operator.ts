import { type OperatorFunction } from '@komore/reactive';

import { type MfaChallengeType } from '../mfa-challenge-type';

/**
 * Request challenge parameters
 */
interface RequestChallengeParameters {
  readonly challengeType: MfaChallengeType;
}

interface RequestChallengeResult {
  readonly challengeType: MfaChallengeType;
  readonly bindingMethod?: unknown; // TODO: ?
}

/**
 * Request challenge operator
 */
export const requestChallenge: OperatorFunction<RequestChallengeParameters, RequestChallengeResult> = source => {
  return source;
};
