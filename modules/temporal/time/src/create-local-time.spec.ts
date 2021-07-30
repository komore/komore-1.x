import { createLocalTime } from './create-local-time';

describe('Create local time', () => {
  it('can create a local time from a Date', () => {
    given: 'a date';
    const date = new Date('2020-01-01T01:02:03.456Z');
    when: 'creating a local time';
    const localTime = createLocalTime(date);
    expect: ''
  })
})