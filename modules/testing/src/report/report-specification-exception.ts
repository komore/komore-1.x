import { UnmetExpectationError } from '../error/unmet-expectation-error';
import { reportUnmetExpectationError } from './report-unmet-expectation-error';
import { type ReportedExpectationValue } from './reported-expectation-value';

/**
 * Reports a specification exception
 *
 * @param e Exception
 * @param expectationValues Expectaiton values
 */
export function reportSpecificationException<T extends ReadonlyArray<ReadonlyArray<ReportedExpectationValue<unknown>>>>(
  e: unknown,
  expectationValues: T
): void {
  if (e instanceof UnmetExpectationError) {
    reportUnmetExpectationError(e, expectationValues);
  } else {
    console.log('oopsie', e);
  }
}
