import { Temporal } from '@komore/temporal';
import { mockCurrentInstant } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { getCurrentMillisecondsSinceEpoch } from './get-current-milliseconds-since-epoch';

feature('Get current milliseconds since Epoch', () => {
  const currentInstant = Temporal.Instant.from('2020-01-01T12:34:56.789012345Z');
  let mockedInstant: ReturnType<typeof mockCurrentInstant>;

  beforeAll(() => {
    mockedInstant = mockCurrentInstant(currentInstant);
  });

  afterAll(() => mockedInstant.clearMock());

  it('returns the number of milliseconds since Epoch', () => {
    when: 'getting the number of milliseconds since Epoch';
    const seconds = getCurrentMillisecondsSinceEpoch();

    expect: 'the number of milliseconds since epoch to have been returned';
    expect(seconds).toBe(1577882096789);
  });
});
