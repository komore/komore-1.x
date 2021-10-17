import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDateTime } from '@komore/temporal/testing';
import { defaultNowProvider } from './default-now-provider';

describe('Default now provider', () => {
  const currentPlainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
  let restoreCurrentPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;

  beforeAll(() => {
    restoreCurrentPlainDateTime = mockCurrentPlainDateTime(currentPlainDateTime);
  });

  afterAll(() => {
    restoreCurrentPlainDateTime();
  });

  it('returns the current plain date/time', () => {
    when: 'getting the plain date time representing now';
    const now = defaultNowProvider();
    expect: 'the current plain date time to have been returned';
    expect(now).toBe(currentPlainDateTime);
  });
});
