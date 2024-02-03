import { mockCurrentPlainDateTime } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { createDefaultNowProvider } from './create-default-now-provider';

feature('Default now provider', () => {
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
  let mockedCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;

  beforeAll(() => {
    mockedCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
  });

  afterAll(() => mockedCurrentPlainDateTime.clearMock());

  it('Returning the current plain date/time', () => {
    when: 'creating a default now provider';
    const defaultNowProvider = createDefaultNowProvider();
    and: 'calling it';
    const now = defaultNowProvider();

    then: 'the current plain date time have been returned';
    expect(now).toBe(currentPlainDateTime);
  });
});
