import { buildStringDifferenceExpectationValue } from './build-string-difference-expectation-value';

describe('Build string difference expectation value', () => {
  it.each([
    [
      {
        lhs: 'Hello world!',
        rhs: 'Hello wordle!',
        expectedValue: '2 differences (83% similarity)\n' + 'Hello wor(ld•)!\n' + 'Hello wor(dle)!',
      },
    ],
  ])('returns a summary and the highlighted differences over separate lines', ({ lhs, rhs, expectedValue }) => {
    given: 'two strings';

    when: 'building the string difference between the two strings';
    const difference = buildStringDifferenceExpectationValue(lhs, rhs);

    then: 'the difference is made of a summary and the highlighted differences';
    expect(difference).toBe(expectedValue);
  });
});
