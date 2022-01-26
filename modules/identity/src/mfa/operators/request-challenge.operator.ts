import { type OperatorFunction } from '@komore/reactive';
import { type ChallengeType } from '../challenge-type';

/**
 * Request challenge parameters
 */
type RequestChallengeParameters = Readonly<{
  challengeType: ChallengeType;
}>;

type RequestChallengeResult = Readonly<{
  challengeType: ChallengeType;
  bindingMethod?: any; // ?
}>;

/**
 * Request challenge operator
 */
export const requestChallenge: OperatorFunction<RequestChallengeParameters, RequestChallengeResult> = source => {
    return source;
};
