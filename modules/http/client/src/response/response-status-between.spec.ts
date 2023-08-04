import { mock } from '@komore/testing';

import { responseStatusBetween } from './response-status-between';

describe('Response status between', () => {
  it.each([
    [39, false],
    [40, true],
    [50, true],
    [60, true],
    [61, false],
  ])('creates a function that returns true when a response status is between two values', (status, expectedResult) => {
    given: 'two status codes';
    const minimum = 40;
    const maximum = 60;
    and: 'a response';
    const response = mock<Response>({ status });

    when: 'creating a function that tests whether a reponse status is between those two values';
    const func = responseStatusBetween({ minimum, maximum });
    and: 'calling it with a response';
    const result = func(response);

    expect: 'true to be returned if the status code is between the minimum and maximum values';
    expect(result).toBe(expectedResult);
  });
});
