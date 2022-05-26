import { type ExpectationType } from '../expect/expectation-type';

/**
 * Unmet expectation error description
 */
export interface UnmetExpectationErrorDescription {
  readonly expectationValue: unknown;
  readonly type: ExpectationType;
}
