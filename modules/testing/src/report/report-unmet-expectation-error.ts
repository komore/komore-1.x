import { type UnmetExpectationError } from '../error/unmet-expectation-error';
import { type ReportedExpectationValue } from './reported-expectation-value';

/**
 * Reports an unmet expectation error
 *
 * @param e Error
 * @param expectationValues Expectation values
 */
export function reportUnmetExpectationError<T extends ReadonlyArray<ReadonlyArray<ReportedExpectationValue<unknown>>>>(
  _e: UnmetExpectationError,
  _expectationValues: T
): void {
  console.log('wee');
}
