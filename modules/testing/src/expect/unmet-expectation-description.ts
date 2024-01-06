import { type ExpectationType } from '../expect/expectation-type';

/**
 * Unmet expectation description
 */
export interface UnmetExpectationDescription {
  readonly expectationValue: unknown;
  readonly type: ExpectationType;
  // TODO: source, range, actual description (eg for comparing values)
}
