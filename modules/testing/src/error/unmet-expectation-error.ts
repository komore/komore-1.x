import { type UnmetExpectationErrorDescription } from './unmet-expectation-error-description';

/**
 * Unmet expectation error
 */
export class UnmetExpectationError extends Error {
  readonly description: UnmetExpectationErrorDescription;
  readonly name = 'UnmetExpectationError';

  /**
   * Unmet expectation error
   *
   * @param expectationType Expectation type
   */
  constructor(description: UnmetExpectationErrorDescriptionWithOptionalExpectationValue) {
    super(description.type);
    this.description = {
      expectationValue: false,
      ...description,
    };
  }
}

type UnmetExpectationErrorDescriptionWithOptionalExpectationValue = Omit<
  UnmetExpectationErrorDescription,
  'expectationValue'
> & {
  readonly expectationValue?: UnmetExpectationErrorDescription['expectationValue'];
};
