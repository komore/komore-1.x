import { ChallengeType } from '../challenge-type';
import { OperatorFunction } from 'rxjs';

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
